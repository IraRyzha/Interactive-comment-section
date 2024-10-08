import { createContext, useReducer, useState } from "react";
import reducer from "../store/reducer";
import initialState from "../store/state";

export const MainContext = createContext();

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({
    name: "MyProfile",
    photo: "https://api.lorem.space/image/face?w=150&h=150",
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
