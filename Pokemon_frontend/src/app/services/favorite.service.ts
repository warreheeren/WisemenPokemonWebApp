import { Injectable } from "@angular/core";
import { PokemonDetail } from "../models/PokemonDetail.model";
import { map } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  addToFavorite(pokemon: PokemonDetail) {
    let favorites = this.getFavoritePokemons();

    if(favorites){
      favorites.push(pokemon);
    }else{
      favorites = [pokemon];
    }

    localStorage.setItem('pokemon', JSON.stringify(favorites));
    return favorites;
  }

  getFavoritePokemons() {
    const favorites = localStorage.getItem('pokemon');
    return favorites ? JSON.parse(favorites) : [];
  }
}
