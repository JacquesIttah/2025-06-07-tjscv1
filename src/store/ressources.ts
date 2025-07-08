import { createSlice } from "@reduxjs/toolkit";
import { type MemeInterface, type ImageInterface } from "orsys-tjs-meme";
import { loadDatas, saveMeme } from "./asyncActions";
interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}

const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "reesouces",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loadDatas.fulfilled,
      (
        state,
        action: {
          type: string;
          payload: {
            memes: Array<MemeInterface>;
            images: Array<ImageInterface>;
          };
        }
      ) => {
        state.memes = action.payload.memes;
        state.images = action.payload.images;
      }
    );
    builder.addCase(
      saveMeme.fulfilled,
      (state, action: { type: string; payload: MemeInterface }) => {
        const position = state.memes.findIndex(
          (m) => m.id === action.payload.id
        );
        if (position >= 0) {
          state.memes[position] = action.payload;
        } else {
          state.memes.push(action.payload);
        }
      }
    );
  },
});

// export const {} = ressources.actions;

export default ressources.reducer;
