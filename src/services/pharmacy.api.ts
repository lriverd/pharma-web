import { Pharmacy } from "../models/pharmacy.model";
import axios from "axios";

const URL_API = process.env.REACT_APP_MS_PHARMACY_URL
  ? process.env.REACT_APP_MS_PHARMACY_URL
  : "https://ms-pharmacys-turn-6reerdxf6a-uc.a.run.app/ms-pharmacys-turn/v1/turn/by-geolocation";

export const getOpenPharmacy = async (
  lat: number,
  long: number,
  radius: number
): Promise<Pharmacy[]> => {
  const { data } = await axios.get<Pharmacy[]>(
    `${URL_API}?lat=${lat}&lng=${long}&radiusKm=${radius}`
  );
  return data;
};
