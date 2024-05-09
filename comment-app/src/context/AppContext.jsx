import { createContext, useReducer } from "react";
import reducer from "../store/reducer";
import initialState from "../store/state";

export const MainContext = createContext();

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default AppContext;
