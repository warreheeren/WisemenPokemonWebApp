import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyTeamComponent } from './my-team/my-team.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'pokemon-detail/:id',
  component: PokemonDetailComponent
},
{
  path: 'favorites',
  component: FavoritesComponent
},
{
  path: 'my-team',
  component: MyTeamComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
