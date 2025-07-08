import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
import { saveMeme } from "./asyncActions";
import { type MemeInterface } from "orsys-tjs-meme";

const initialState = {
  meme: emptyMeme,
};

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (state, action: { type: string; payload: MemeInterface }) => {
      state.meme = action.payload;
    },
    clear: (state, action: { type: string }) => {
      state.meme = emptyMeme;
    },
  },
});

export const {clear,update} = current.actions;

export default current.reducer;
