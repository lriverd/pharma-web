import { Region } from "../models/region/region.model";
import axios from "axios";

const URL_API = process.env.REACT_APP_MS_PHARMACY_URL
  ? process.env.REACT_APP_MS_PHARMACY_URL
  : "https://ms-pharmacys-turn-6reerdxf6a-uc.a.run.app/ms-pharmacys-turn/v1/region";

export const getRegions = async (): Promise<Region[]> => {
  const { data } = await axios.get<Region[]>(`${URL_API}/region`);
  return data;
};
