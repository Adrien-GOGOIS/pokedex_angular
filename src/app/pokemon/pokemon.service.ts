import { Injectable } from '@angular/core';
import { POKEMONS } from './ressources/mockPokemon.list';
import { Pokemon } from './types/pokemon.type';

@Injectable(
  /* 
  providedIn: 'root' 
  --> Disponible dans l'ensemble de l'application. Ici il faudrait juste le rendre dispo dans le module donc à insérer dans le module directement avec "providers" 
  */
)
export class PokemonService {

  constructor() { }

  getPokemons(): Pokemon[] {
	return POKEMONS;
  }	

  getPokemonById(id: number): Pokemon | undefined {
	return POKEMONS.find(pokemon => pokemon.id === id)
  }

  getPokemonsByType(type: string): Pokemon[] {
	return POKEMONS.filter(pokemon => pokemon.types.includes(type));
  }

  getPokemonsTypes(): string[] {
	return [...new Set(POKEMONS.map(pokemon => pokemon.types).flat())];
  }

  updatePokemon(pokemon: Pokemon) {
	const pokemons = this.getPokemons();
	const index: number = pokemons.findIndex(p => p.id === pokemon.id);
	pokemons[index] = pokemon;
  }

  postPokemon(pokemon: Pokemon) {
	POKEMONS.push(pokemon);
  }
}
