import { createContext, useReducer, useState } from "react";
import reducer from "../store/reducer";
import initialState from "../store/state";

export const MainContext = createContext();

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({
    name: "MyProfile",
  });

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
        user,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default AppContext;
