import React, {createContext, useContext, useReducer} from "react";

// prepares the dataLayer

export const StateContext= createContext();

// we wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull and push information from the data layer
export const useStateValue = () => useContext(StateContext);