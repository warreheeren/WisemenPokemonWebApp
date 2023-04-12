import { FavoriteService } from './../services/favorite.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  pokemon :Pokemon[];
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.pokemon = this.favoriteService.getFavoritePokemons();
  }
}
