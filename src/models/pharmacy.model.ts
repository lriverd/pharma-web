import { Adress } from "./adress.model";

export interface Pharmacy{
    id: string;
    name: string;
    phone: string;
    open_at: Date;
    close_at: Date;
    open_now: boolean;
    address: Adress;
    distance_km_from_origin: number;
}