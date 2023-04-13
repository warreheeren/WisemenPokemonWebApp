import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  pokemon: Pokemon[];
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.pokemon = this.teamService.getTeam();
  }

  removeAllFromTeam(){
    this.teamService.removeAllFromteam();
  }

}
