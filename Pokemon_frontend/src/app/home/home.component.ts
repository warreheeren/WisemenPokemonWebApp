import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from './../models/Pokemon.model';
import { Component, Inject, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon:Pokemon[];
  searchText: string ='';
  filteredPokemons: Pokemon[];
  sortPokemons: Pokemon[];
  visible: boolean = false;
  iconVisible: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data => {
      this.pokemon = data;
      this.filteredPokemons = this.pokemon;
      this.sortPokemons = this.pokemon;
    }))
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    this.filteredPokemons = this.pokemon.filter(p => p.name.toLowerCase().includes(this.searchText) || p.id.toLocaleString().includes(this.searchText))
    console.log(this.searchText);
  }

  ascendingIdOrder(){
    this.sortPokemons = this.sortPokemons.sort(function(a,b){
      return a.id - b.id;
    });
    this.filterVisible();
  }
  descendingIdOrder(){
    this.sortPokemons = this.sortPokemons.sort(function(a,b){
      return b.id - a.id;
    });
    this.filterVisible();
  }

  ascendingNameOrder(){
    this.sortPokemons = this.sortPokemons.sort(function(a,b){
      return a.name.localeCompare(b.name)
    });
    this.filterVisible();
  }

  descendingNameOrder(){
    this.sortPokemons = this.sortPokemons.sort(function(a,b){
      return b.name.localeCompare(a.name)
    });
    this.filterVisible();
  }

  filterVisible(){
    this.visible = !this.visible;
  }
}
