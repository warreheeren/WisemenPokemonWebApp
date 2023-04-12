
import { Pokemon } from './../models/Pokemon.model';
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon:Pokemon;
  constructor() { }

  ngOnInit(): void {
  }
}
