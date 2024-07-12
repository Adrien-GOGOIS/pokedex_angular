import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
		<div class="nav-wrapper red">
			<a href="#" class="brand-logo center">
				Pokédex
			</a>
		</div>
	</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
