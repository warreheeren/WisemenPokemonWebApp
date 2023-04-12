import { PokemonDetail } from './../models/PokemonDetail.model';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Type } from '../models/Type.model';
import { Stats } from '../models/Stats.model';
import { Stat } from '../models/Stat.model';

@Injectable({
   providedIn: 'root'
})
export class PokemonService {

   private readonly API: string = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon';
   private readonly APIPokemonDetail: string = 'https://pokeapi.co/api/v2/pokemon/';

   constructor(private http: HttpClient) { }

   getPokemon(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.API).pipe(map(response => {
        response.forEach(i => {
          i.types.forEach(t => {
            const type = new Type();
            type.name = t.type.name;
            t.type = type;
          });
        });
        return response;
      }));
   }

   getPokemonDetailById(id: number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(this.APIPokemonDetail + id).pipe(map(response => {
        response.types.forEach(t => {
          const type = new Type();
          type.name = t.type.name;
          t.type = type;
        });
        response.stats.forEach(s => {
          const stat = new Stats();
          stat.base_stat = s.base_stat;
          stat.effort = s.effort;
          stat.stat = s.stat;
          s = stat;
        });
      return response;
    }));
  }
}
