import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyTeamComponent } from './my-team/my-team.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    HomeComponent,
    PokemonDetailComponent,
    FavoritesComponent,
    MyTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
