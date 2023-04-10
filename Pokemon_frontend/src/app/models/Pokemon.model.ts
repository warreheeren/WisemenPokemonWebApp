import { Sprites } from './Sprites.model';
import { TypeWithSlot } from './TypeWithSlot.model';

export class Pokemon {
    id: number;
    name: string;
    types:TypeWithSlot[];
    sprites:Sprites;
}
