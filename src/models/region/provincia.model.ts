import { Comuna } from "./comuna.model";

export interface Provincia {
  id: string;
  name: string;
  comunas: Comuna[];
}
