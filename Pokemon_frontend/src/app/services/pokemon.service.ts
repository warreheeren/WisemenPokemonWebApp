import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Type } from '../models/Type.model';

@Injectable({
   providedIn: 'root'
})
export class PokemonService {

   private readonly API: string = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon';

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
      }));;
   }
}
