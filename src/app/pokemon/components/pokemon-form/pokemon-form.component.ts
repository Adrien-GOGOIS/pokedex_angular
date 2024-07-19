import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../types/pokemon.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
	@Input() pokemon: Pokemon;
	pokemonTypes: string[];
	isNewPokemon: boolean = false;

	constructor(
		private pokemonService: PokemonService, 
		private router: Router
	) {}
	ngOnInit(): void {
		if (this.router.url.includes('add')) {
			this.isNewPokemon = true;
		}
		this.pokemonService.getPokemonsTypes().subscribe((types) => this.pokemonTypes = types);
	}

	hasType(type: string): boolean {
		return this.pokemon.types.includes(type);
	}

	selectType(event: Event, type: string): void {
		event.preventDefault();
		const isChecked = (event.target as HTMLInputElement).checked;

		if (isChecked) {
			this.pokemon.types.push(type);
		} else {
			const index = this.pokemon.types.indexOf(type);
			this.pokemon.types.splice(index, 1);
		}
	}

	isTypesValid(type: string): boolean {
		if(this.pokemon.types.length === 1 && this.hasType(type)) {
			return false;
		}

		if(this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false;
		}
		
		return true;
	}

	onSubmit(): void {
		if (this.isNewPokemon) {
			this.pokemonService.addPokemon(this.pokemon).subscribe((pokemon: Pokemon) => {
				this.router.navigate(['/pokemons', pokemon.id]);
			});

			return;
		}

		this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
			this.pokemon && this.router.navigate(['/pokemons', this.pokemon.id]);
		});
	}
}
