import { Form } from "./Form.model";
import { Move } from "./Move.model";
import { Species } from "./Species.model";
import { Stats } from "./Stats.model";
import { TypeWithSlot } from "./TypeWithSlot.model";
import { Ability } from "./Ability.model";

export class PokemonDetail {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites:any;
  stats: Stats[];
  types:TypeWithSlot[];
  weight: number;
}
