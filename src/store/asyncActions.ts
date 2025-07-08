import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MemeInterface } from "orsys-tjs-meme";
import { RESSOURCES_URI, REST_URL } from "../config/constantes";

export const loadDatas = createAsyncThunk("ressources/loader", async () => {
  const promiseImage = fetch(`${REST_URL}${RESSOURCES_URI.images}`);
  const promiseMemes = fetch(`${REST_URL}${RESSOURCES_URI.memes}`);
  const commonPromise = await Promise.all([promiseMemes, promiseImage]);
  return {
    memes: await commonPromise[0].json(),
    images: await commonPromise[1].json(),
  };
});
export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const promise = await fetch(
      `${REST_URL}${RESSOURCES_URI.memes}${
        meme.id !== undefined ? `/${meme.id}` : ""
      }`,
      {
        method: undefined !== meme.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(meme),
      }
    );
    return await promise.json();
  }
);
