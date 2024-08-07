import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { LoaderComponent } from '../loader/loader.component';

const pokemonsRoutes: Routes = [
	{ path: 'edit/pokemons/:id', component: EditPokemonComponent },
	{ path: 'pokemons/add', component: AddPokemonComponent },
	{ path: 'pokemons', component: PokemonsListComponent },
	{ path: 'pokemons/:id', component: PokemonDetailsComponent },
]

@NgModule({
  declarations: [
	PokemonsListComponent,
	PokemonDetailsComponent,
	EditPokemonComponent,
	PokemonFormComponent,
	AddPokemonComponent,
	SearchPokemonComponent,
	LoaderComponent,
	BorderCardDirective,
	PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule,
	FormsModule,
	RouterModule.forChild(pokemonsRoutes)
  ],
  providers: [
	PokemonService // Pour les services dispo juste dans un module
  ],
})
export class PokemonModule { }
