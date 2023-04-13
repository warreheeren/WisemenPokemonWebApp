import { Pokemon } from './../models/Pokemon.model';
import { FavoriteService } from './../services/favorite.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  pokemon :Pokemon[];
  counter: number;
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.pokemon = this.favoriteService.getFavoritePokemons();
    this.counter = this.favoriteService.counter;
    }

  removeAllFavorites(){
    this.favoriteService.removeAllFavorites();
  }
}
