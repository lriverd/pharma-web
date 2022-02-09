import { Adress } from "./adress.model";

export interface Pharmacy{
    id: number;
    name: string;
    phone: string;
    open_at: Date;
    close_at: Date;
    open_now: boolean;
    adress: Adress;
    distance_km_from_origin: number;
}