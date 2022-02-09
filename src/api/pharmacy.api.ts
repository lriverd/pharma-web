import { Pharmacy } from "../models/pharmacy.model";

const URL_API = "";


export const getOpenPharmacy = async (): Promise<Pharmacy> => {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data as Pharmacy;
}