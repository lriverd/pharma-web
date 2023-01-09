import { Pharmacy } from "../models/pharmacy.model";

const URL_API =
  "http://localhost:8080/ms-pharmacys-turn/v1/turn/by-geolocation";

export const getOpenPharmacy = async (
  lat: number,
  long: number,
  radius: number
): Promise<Pharmacy[]> => {
  const response = await fetch(
    `${URL_API}?lat=${lat}&lng=${long}&radiusKm=${radius}`
  );
  const data = await response.json();
  return data as Pharmacy[];
};
