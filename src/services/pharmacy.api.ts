import { Pharmacy } from "../models/pharmacy.model";
import axios from "axios";

const URL_API = process.env.REACT_APP_MS_PHARMACY_URL
  ? process.env.REACT_APP_MS_PHARMACY_URL
  : "https://ms-pharmacys-turn-6reerdxf6a-uc.a.run.app/ms-pharmacys-turn/v1";

export const getOpenPharmacy = async (
  lat: number,
  long: number,
  radius: number
): Promise<Pharmacy[]> => {
  console.log("a1");
  const { data } = await axios.get<Pharmacy[]>(
    `${URL_API}/turn/by-geolocation?lat=${lat}&lng=${long}&radiusKm=${radius}`
  );
  console.log("a12");

  return data;
};

export const getOpenPharmacyByWord = async (
  locality: string
): Promise<Pharmacy[]> => {
  const { data } = await axios.get<Pharmacy[]>(
    `${URL_API}/turn/by-locality?pattern=${locality}`
  );
  console.log("a1223");
  return data;
};
