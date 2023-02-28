import React, { createContext, useContext, useReducer } from "react";
import { parkingData } from "../data";

export interface ParkingArea {
  id: string;
  name: string;
  spaces: {
    current: number;
    planned: number;
    available?: number;
  };
}

interface State {
  parking: ParkingArea[];
  timeframe: "current" | "planned";
  totalSpaces: number;
  totalAvailable: number;
  spacesNeeded: number;
}

const initialState: State = {
  parking: parkingData,
  timeframe: "current",
  totalSpaces: parkingData.reduce((acc, area) => {
    return acc + area.spaces.current;
  }, 0),
  totalAvailable: 0,
  spacesNeeded: 0,
};

const StateContext = createContext<State>(null as unknown as State);
const DispatchContext = createContext<IDispatch>(null as unknown as IDispatch);

export const useSettingsState = () => useContext(StateContext);
export const useSettingsDispatch = () => useContext(DispatchContext);

type IDispatch = React.Dispatch<Actions>;

// TODO rename `SettingsActions` to something meaningful and unique
export enum SettingsActions {
  setTimeframe,
  setSpacesNeeded,
}

interface SetTimeframe {
  type: SettingsActions.setTimeframe;
  payload: "current" | "planned";
}

interface SetSpacesNeeded {
  type: SettingsActions.setSpacesNeeded;
  payload: number;
}

type Actions = SetTimeframe | SetSpacesNeeded;

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SettingsActions.setSpacesNeeded: {
      const spacesNeeded = action.payload;
      const parking = updateSpaces(spacesNeeded, state);
      return {
        ...state,
        spacesNeeded: spacesNeeded,
        parking: parking,
      };
    }

    case SettingsActions.setTimeframe: {
      const timeframe = action.payload;
      return {
        ...state,
        timeframe: timeframe,
        totalSpaces: state.parking.reduce((acc, area) => {
          return acc + area.spaces[timeframe];
        }, 0),
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

const updateSpaces = (spacesNeeded: number, state: State) => {
  const parking = state.parking.map((area) => {
    const fractionOfTotal = area.spaces[state.timeframe] / state.totalSpaces;
    return {
      ...area,
      spaces: {
        ...area.spaces,
        available: Math.max(
          Math.round(
            area.spaces[state.timeframe] - fractionOfTotal * spacesNeeded
          ),
          0
        ),
      },
    };
  });
  return parking;
};
