import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon/types/pokemon.type';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styles: [
  ]
})
export class PokemonDetailsComponent implements OnInit {
  pokemonsList: Pokemon[];
  pokemonSelected: Pokemon | undefined;

  constructor(
	private route: ActivatedRoute, 
	private router : Router,
	private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
	const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
	this.pokemonSelected = pokemonId ? this.pokemonService.getPokemonById(+pokemonId) : undefined;
  }

  goBackToList() {
  	this.router.navigate(['/pokemons']);
  }

}
