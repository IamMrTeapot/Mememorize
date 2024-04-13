import { environment } from "../config/environment";
import { MemeData } from "../types/DisplayTypes";

export const MemeServices = {
  getMemes: async (): Promise<MemeData[]> => {
    const url = `${environment.backend.url}/memes`;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    if (response.success) {
      return response.data;
    }
    return [];
  },

  createMeme: async (meme: MemeData): Promise<boolean> => {
    const url = `${environment.backend.url}/memes`;
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meme),
    });
    const response = await rawResponse.json();
    return response.success;
  },
};
