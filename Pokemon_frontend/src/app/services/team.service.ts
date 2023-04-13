import { Injectable } from "@angular/core";
import { PokemonDetail } from "../models/PokemonDetail.model";



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  addToTeam(pokemon: PokemonDetail) {
    let team = this.getTeam();

    if(team){
      team.push(pokemon);
    }else{
      team = [pokemon];
    }

    localStorage.setItem('team', JSON.stringify(team));
    return team;
  }

  getTeam() {
    const teamJSON = localStorage.getItem('team');
    return teamJSON ? JSON.parse(teamJSON) : [];
  }

  removeAllFromteam() {
    return localStorage.removeItem('team');
  }

  removeOneFromTeam(pokemon : PokemonDetail){
    //todo
  }
}
