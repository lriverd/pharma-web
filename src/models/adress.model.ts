import { Coordinates } from "./coordinates.model";

export interface Adress{
    direction: string;
    commune: string;
    region: string;
    coordinates: Coordinates;
}