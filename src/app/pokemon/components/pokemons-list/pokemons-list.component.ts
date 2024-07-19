import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon/types/pokemon.type';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styles: []
})
export class PokemonsListComponent implements OnInit {
	pokemonList: Pokemon[];
	pokemonSelected: Pokemon | undefined;

	ngOnInit(): void { 
		this.pokemonService.getPokemons().subscribe((pokemons) => this.pokemonList = pokemons);
	}

	constructor(
		private router: Router, 
		private pokemonService: PokemonService
	) {}

	goToPokemon(pokemon: Pokemon) {
		this.router.navigate(['/pokemons', pokemon.id]);
	}
	
	selectPokemon(pokemonId: string) {
		this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => this.pokemonSelected = pokemon);
	}
}
