import React, { createContext, useContext, useReducer } from "react";
import { parkingData } from "../data";

export interface ParkingArea {
  id: string;
  name: string;
  cost: "$10-20" | "Free";
  spaces: {
    current: number;
    planned: number;
    available?: number;
  };
}

interface VisitorInfo {
  totalVisitors: number;
  percentByCar: number;
  vehicleOccupancy: number;
  turnoverRate: number;
}

interface Options {
  timeframe: "current" | "planned";
  includeColdSpringMNR: boolean;
  includeBoscobel: boolean;
  exclude: string[];
}

interface State {
  parkingAreas: ParkingArea[];
  totalSpaces: number;
  spacesNeeded: number;
  visitorInfo: VisitorInfo;
  options: Options;
}

const initialState: State = {
  parkingAreas: parkingData,
  totalSpaces: 0,
  spacesNeeded: 0,
  visitorInfo: {
    totalVisitors: 0,
    percentByCar: 0,
    vehicleOccupancy: 0,
    turnoverRate: 0,
  },
  options: {
    timeframe: "current",
    includeBoscobel: true,
    includeColdSpringMNR: false,
    exclude: ["BCN-MNR", "CS-MNR"],
  },
};

const StateContext = createContext<State>(null as unknown as State);
const DispatchContext = createContext<IDispatch>(null as unknown as IDispatch);

export const useSettingsState = () => useContext(StateContext);
export const useSettingsDispatch = () => useContext(DispatchContext);

type IDispatch = React.Dispatch<Actions>;

export enum SettingsActions {
  initialize,
  setOptions,
  setVisitorInfo,
}

interface Initialize {
  type: SettingsActions.initialize;
  payload: VisitorInfo;
}

interface SetOptions {
  type: SettingsActions.setOptions;
  payload: Options;
}

interface SetVisitorInfo {
  type: SettingsActions.setVisitorInfo;
  payload: VisitorInfo;
}

type Actions = Initialize | SetVisitorInfo | SetOptions;

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SettingsActions.initialize: {
      const visitorInfo = action.payload;

      const totalSpaces = state.parkingAreas
        .filter((area) => !state.options.exclude.includes(area.id))
        .reduce((acc, area) => {
          return acc + area.spaces[state.options.timeframe];
        }, 0);

      const spacesNeeded = Math.round(
        (visitorInfo.totalVisitors * visitorInfo.percentByCar) /
          100 /
          visitorInfo.vehicleOccupancy /
          visitorInfo.turnoverRate
      );

      const parkingAreasUpdated = updateSpaces(
        state.parkingAreas,
        spacesNeeded,
        totalSpaces,
        state.options
      );

      return {
        ...state,
        visitorInfo: visitorInfo,
        totalSpaces: totalSpaces,
        spacesNeeded: spacesNeeded,
        parkingAreas: parkingAreasUpdated,
      };
    }

    case SettingsActions.setOptions: {
      const options = action.payload;
      const totalSpaces = state.parkingAreas.filter((area) => !options.exclude.includes(area.id)).reduce((acc, area) => {
        return acc + area.spaces[options.timeframe];
      }, 0);
      const parking = updateSpaces(
        state.parkingAreas,
        state.spacesNeeded,
        totalSpaces,
        options
      );
      return {
        ...state,
        options: action.payload,
        totalSpaces: totalSpaces,
        parkingAreas: parking,
      };
    }

    case SettingsActions.setVisitorInfo: {
      const { totalVisitors, percentByCar, vehicleOccupancy, turnoverRate } =
        action.payload;
      const spacesNeeded =
        (totalVisitors * percentByCar) / 100 / vehicleOccupancy / turnoverRate;
      const parking = updateSpaces(
        state.parkingAreas,
        spacesNeeded,
        state.totalSpaces,
        state.options
      );
      return {
        ...state,
        visitorInfo: action.payload,
        spacesNeeded: Math.round(spacesNeeded),
        parkingAreas: parking,
      };
    }

    default:
      throw new Error();
  }
};

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const updateSpaces = (
  parkingAreas: ParkingArea[],
  spacesNeeded: number,
  totalSpaces: number,
  options: Options
) => {
  const parking = parkingAreas.map((area) => {
    const fractionOfTotal = area.spaces[options.timeframe] / totalSpaces;
    return {
      ...area,
      spaces: {
        ...area.spaces,
        available: options.exclude.includes(area.id)
          ? 0
          : Math.max(
              Math.round(
                area.spaces[options.timeframe] - fractionOfTotal * spacesNeeded
              ),
              0
            ),
      },
    };
  });
  return parking;
};
