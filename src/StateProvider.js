//we need to track the basket 

import React, { createContext,useContext,useReducer } from "react";
//this is the data layer 
export const StateContext=createContext();

//bulid a provider
export const StateProvider=({reducer,initialState,children })=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//this how we us eit inside the component 
export const useStateValue=()=>useContext(StateContext);