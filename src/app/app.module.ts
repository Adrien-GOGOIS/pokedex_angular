import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './pokemon/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent
  ], // Liste des composants qui appartiennent au module
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
	PokemonModule,
    AppRoutingModule // Chargé après pour éviter que la route par défaut écrase les autres
  ], // Liste des composants d'autres modules à importer --> ORDRE IMPORTANT POUR LES ROUTES
  providers: [], // Injection de dépendance (reliquat)
  bootstrap: [AppComponent] // Propre au module racine -> A démarrer lors du démarrage
})
export class AppModule { }
