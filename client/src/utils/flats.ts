import { FlatT } from "../types";
import axios from "axios";

export const getFlats = async (page: number): Promise<FlatT[] | null> => {
  try {
    const res = await axios.get(`http://localhost:8000/?page=${page}`);
    const flats: FlatT[] = res.data;
    return flats;
  } catch (err) {
    console.log("Error occured while getting flats", err);
  }
  return null;
};
