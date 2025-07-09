import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAsyncRessources.fulfilled, (state, action) => {
      state.images = action.payload;
    });
    builder.addCase(loadAsyncRessourcesAll.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
    });
    //possible d'ecouter des actoin pas pour ma tranche directement ciblé
    // ->  builder.addCase('current/update',(s,a)=>{})
  },
});

//export const {} = ressources.actions;
export const REST_URL = "http://localhost:5679";

export const loadAsyncRessources = createAsyncThunk(
  "ressources/load",
  async () => {
    const primages = await fetch(`${REST_URL}/images`);
    const result = await primages.json();
    return result;
  }
);
export const loadAsyncRessourcesAll = createAsyncThunk(
  "ressources/loadAll",
  async () => {
    const primages = fetch(`${REST_URL}/images`);
    const prmemes = fetch(`${REST_URL}/memes`);
    const prAll = await Promise.all([primages, prmemes]);
    const result = {
      memes: await prAll[1].json(),
      images: await prAll[1].json(),
    };
    return result;
  }
);
export default ressources.reducer;
