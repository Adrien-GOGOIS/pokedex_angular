import { Injectable } from '@angular/core';
import { Pokemon } from './types/pokemon.type';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, filter, map, of, tap } from 'rxjs';

@Injectable(
  /* 
  providedIn: 'root' 
  --> Disponible dans l'ensemble de l'application. Ici il faudrait juste le rendre dispo dans le module donc à insérer dans le module directement avec "providers" 
  */
)
export class PokemonService {

	constructor(private inMemoryDataService: InMemoryDataService, private http: HttpClient) { }

	getPokemons(): Observable<Pokemon[]> {
		return this.http
				.get<Pokemon[]>('api/pokemons')
				.pipe((tap(data => this.log(data)), catchError((error) =>
					this.handleError(error, [])
				)));
	}	

	getPokemonById(id: number): Observable<Pokemon | undefined> {
		return this.http
			.get<Pokemon>(`api/pokemons/${id}`)
			.pipe((
				tap(data => this.log(data)), 
				catchError((error) => this.handleError(error, []))
			));
	}

	getPokemonsByType(type: string): Observable<Pokemon[]> {
		return this.getPokemons().pipe(
			map(pokemons => pokemons.filter(pokemon => pokemon.types.includes(type)))
		)
	}

	getPokemonsTypes(): Observable<string[]> {
		return this.getPokemons().pipe(
			map(pokemons => [...new Set(pokemons.map(pokemon => pokemon.types).flat())])
		);
	}

	updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
		const options = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		}

		return this.http
			.put<Pokemon>(`api/pokemons/`, pokemon, options)
			.pipe((
				tap(data => this.log(data)), 
				catchError((error) =>this.handleError(error, pokemon))
			));
	}

	addPokemon(pokemon: Pokemon): Observable<Pokemon> {
		const options = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		}

		return this.http
			.post<Pokemon>(`api/pokemons/`, pokemon, options)
			.pipe((
				tap(data => this.log(data)), 
				catchError((error) =>this.handleError(error, pokemon))
			));
	}

	deletePokemonById(pokemon: Pokemon): Observable<unknown> {
		return this.http
			.delete(`api/pokemons/${pokemon.id}`)
			.pipe((
				tap(data => this.log(data)), 
				catchError((error) =>this.handleError(error, []))
			));
	}

	private log(response: unknown) {
		console.table(response);
	}

	private handleError(error: any, errorValue: any) {
		console.log(error);
		return of(errorValue);
	}
}
