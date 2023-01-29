import { Provincia } from "./provincia.model";

export interface Region {
  id: string;
  name: string;
  comunas: Provincia[];
}
