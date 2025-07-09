import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MemeInterface } from "orsys-tjs-meme";
export const REST_URL = "http://localhost:5679";

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

export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prm = await fetch(
      `${REST_URL}/meme${meme.id !== undefined ? `/${meme.id}` : ""}`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme),
      }
    );
    return await prm.json();
  }
);
