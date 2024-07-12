import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchInputComponent } from './components/pokemons-list/pokemon-search-input/pokemon-search-input.component';
import { PokemonService } from './pokemon.service';

const pokemonsRoutes: Routes = [
	{ path: 'pokemons', component: PokemonsListComponent },
	{ path: 'pokemons/:id', component: PokemonDetailsComponent },
]

@NgModule({
  declarations: [
	PokemonsListComponent,
	PokemonDetailsComponent,
	PokemonSearchInputComponent,
	BorderCardDirective,
	PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(pokemonsRoutes)
  ],
  providers: [
	PokemonService // Pour les services dispo juste dans un module
  ],
})
export class PokemonModule { }
