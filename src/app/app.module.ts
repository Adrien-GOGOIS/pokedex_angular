import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonSearchInputComponent } from './pokemon/components/pokemons-list/pokemon-search-input/pokemon-search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent
  ], // Liste des composants qui appartiennent au module
  imports: [
    BrowserModule,
	PokemonModule,
    AppRoutingModule // Chargé après pour éviter que la route par défaut écrase les autres
  ], // Liste des composants d'autres modules à importer --> ORDRE IMPORTANT POUR LES ROUTES
  providers: [], // Injection de dépendance (reliquat)
  bootstrap: [AppComponent] // Propre au module racine -> A démarrer lors du démarrage
})
export class AppModule { }
