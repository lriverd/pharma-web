import { Pharmacy } from "../models/pharmacy.model";

const URL_API = "http://localhost:8090/ms-pharmacys-turn/v1/turn/by-geolocation?lat=-33.482883&lng=-70.760702&radiusKm=15";


export const getOpenPharmacy = async (): Promise<Pharmacy[]> => {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data as Pharmacy[];
}