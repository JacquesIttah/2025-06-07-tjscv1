import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
const store = configureStore({
  reducer: combineReducers({ current: currentReducer }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
