import { FlatT } from "@models/flats";
import axios from "axios";

export const getPagesAmount = async (): Promise<null | number> => {
  try {
    const res = await axios.get(`http://localhost:8000/pages`);
    console.log("res", res);
    const amount: number = res.data;
    return amount;
  } catch (err) {
    console.log("Error occured while getting amount of pages");
  }

  return null;
};

export const getFlats = async (page: number): Promise<FlatT[] | null> => {
  try {
    const res = await axios.get(`http://localhost:8000/flats?page=${page}`);
    const flats: FlatT[] = res.data;
    return flats;
  } catch (err) {
    console.log("Error occured while getting flats", err);
  }
  return null;
};
