import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // required -> <app-root></app-root>
  templateUrl: 'app.component.html', // -> Vue du composant
  styles: []
})

export class AppComponent implements OnInit{ // -> Logique du composant

  ngOnInit(): void {}
}

/*
CYCLES DE VIE :
	ngOnChanges : 1er appel, et quand le composant est modifié
	ngOnInit : 2nd appel, et quand le composant est initialisé
	ngOnChange : à implémenter pour étendre le comportement par défaut de ngOnChanges
	ngAfterViewInit : 3eme appel, et quand le composant est affiché
	ngOnDestroy : Quand le composant est detruit
*/