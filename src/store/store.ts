import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";

export const store = configureStore({
  reducer: combineReducers({ current: currentReducer }),
});
store.subscribe(()=>console.log(store.getState()))