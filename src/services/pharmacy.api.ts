import { Pharmacy } from "../models/pharmacy.model";
import axios from "axios";

const URL_API =
  "http://localhost:8080/ms-pharmacys-turn/v1/turn/by-geolocation";

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
