import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./pokemon/mock-pokemon-list";
import { Pokemon } from "./pokemon/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }
}
