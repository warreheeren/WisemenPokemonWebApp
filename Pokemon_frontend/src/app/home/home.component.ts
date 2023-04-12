import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from './../models/Pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon:Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data => {
      this.pokemon = data;
    }))
  }

}
