import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Pokemon } from '../../types/pokemon.type';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
	constructor(private router: Router, private pokemonService: PokemonService) { }

	searchTerms = new Subject<string>(); // Flux de données dans le temps -> "a"..."ab"..."abc"..."ab"...
	pokemons$: Observable<Pokemon[]>;

	ngOnInit(): void {
		this.pokemons$ = this.searchTerms.pipe(
			debounceTime(300), // 300ms de pause entre chaque requête
			distinctUntilChanged(), // Ne recharche que si le texte a change
			switchMap((term: string) => this.pokemonService.searchPokemons(term)) // Recherche qui annule celle d'avant
		);
	}	

	search(term: string): void {
		this.searchTerms.next(term); // Envoi du terme dans le flux de données à chaque entrée de clavier
	}	

	goToDetail(pokemon: any): void {
		this.router.navigate(['/pokemons', pokemon.id]);
	}	

}
