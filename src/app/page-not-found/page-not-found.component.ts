import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 class="center">
      404
    </h1>
	<h4 class="center">Vous vous êtes emmêlé les pinceaux</h4>
	<h6 class="center">Cette page n'existe pas</h6>
	<div class="center">
		<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="">
	</div>
	<div class="center">
		<a href="/" class="btn waves-effect waves-light">Accueil</a>
	</div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {}
