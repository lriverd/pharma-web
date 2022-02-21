import { Coordinates } from "./coordinates.model";

export interface Adress{
    address: string;
    locality: string;
    coordinates: Coordinates;
}