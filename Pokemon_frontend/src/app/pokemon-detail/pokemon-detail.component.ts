import { PokemonService } from './../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../models/PokemonDetail.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemomId: any;
  pokemon: PokemonDetail;
  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetailById(this.pokemomId).subscribe((data => {
      this.pokemon = data;
      console.log(this.pokemon);
    }))
  }

}
