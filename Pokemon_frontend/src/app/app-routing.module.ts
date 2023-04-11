import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'pokemon-detail/:id',
  component: PokemonDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
