import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import ressourcesReducer, { loadAsyncRessourcesMemes } from "./ressources";
import { loadAsyncRessources } from "./ressources";


export const store = configureStore({
  reducer: combineReducers({ current: currentReducer, ressources:ressourcesReducer }),
});
store.subscribe(()=>console.log(store.getState()))
store.dispatch(loadAsyncRessources());
store.dispatch(loadAsyncRessourcesMemes());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;