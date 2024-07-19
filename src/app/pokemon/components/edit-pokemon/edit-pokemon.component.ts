import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../types/pokemon.type';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: ``,
})
export class EditPokemonComponent implements OnInit {
	pokemon: Pokemon | undefined;

	constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
		if(pokemonId) {
			this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => this.pokemon = pokemon)
		}
	 }
}
