import { PokemonService } from './../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../models/PokemonDetail.model';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemomId: any;
  pokemon: PokemonDetail;
  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService,  private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.pokemomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetailById(this.pokemomId).subscribe((data => {
      this.pokemon = data;
    }))
  }

  strToCheck(stat:string): string{
    if(stat.length > 7){
      return stat.slice(0,2) + '. ' + stat.slice(8,11);
    }else{
      return stat;
    }
  }

  addToFavorite(pokemon:PokemonDetail){
    this.favoriteService.addToFavorite(pokemon);
  }
}
