import React, { createContext, useContext, useReducer } from 'react';

interface IState {
  counter: number;
}

const initialState: IState = {
  counter: 0,
};

const StateContext = createContext<IState>(null as unknown as IState);
const DispatchContext = createContext<IDispatch>(null as unknown as IDispatch);

// TODO rename `useSettingsState` and `useSettingsDispatch` to something meaningful
// and unique, as you may be importing multiple into components
export const useSettingsState = () => useContext(StateContext);
export const useSettingsDispatch = () => useContext(DispatchContext);

type IDispatch = React.Dispatch<Actions>;

// TODO rename `SettingsActions` to something meaningful and unique
export enum SettingsActions {
  initialize,
  increment,
}

interface Initialize {
  type: SettingsActions.initialize;
  payload: number;
}

interface Increment {
  type: SettingsActions.increment;
}

type Actions = Initialize | Increment;

const reducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case SettingsActions.initialize: {
      return {
        ...state,
        counter: action.payload,
      };
    }
    case SettingsActions.increment: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    default:
      throw new Error();
  }
};

// TODO rename `SettingsProvider` to something meaningful and unique
export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};
