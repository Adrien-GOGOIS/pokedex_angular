import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/pokemon/ressources/mockPokemon.list';
import { Pokemon } from 'src/app/pokemon/types/pokemon.type';

@Component({
  selector: 'app-pokemon-search-input',
  template: `
    <!-- variable référencée dans le template directement : #input -->
	<input
		#input
		(keyup.enter)="goToPokemon(pokemonList[+input.value])"
		type="number"
	/>
  `,
  styles: [
  ]
})
export class PokemonSearchInputComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	goToPokemon(pokemon: Pokemon) {
		this.router.navigate(['/pokemons', pokemon.id]);
	}

}
