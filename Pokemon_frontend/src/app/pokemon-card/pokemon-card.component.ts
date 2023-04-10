
import { Pokemon } from './../models/Pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'
import { Type } from '../models/Type.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemon: Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data => {
      this.pokemon = data;
      console.log(this.pokemon);
    }))
  }
}
