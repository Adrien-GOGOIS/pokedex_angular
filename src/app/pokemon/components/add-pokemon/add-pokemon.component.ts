import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../types/pokemon.type';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styles: ``
})
export class AddPokemonComponent implements OnInit {

	newPokemon: Pokemon;

	ngOnInit() {
		this.newPokemon = new Pokemon();
	}

}
