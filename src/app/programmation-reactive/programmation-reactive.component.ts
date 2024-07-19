import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programmation-reactive',
  templateUrl: './programmation-reactive.component.html',
  styles: ``
})
export class ProgrammationReactiveComponent implements OnInit {

	ngOnInit(): void {
		const myObserver = {
			next: (item: unknown) => {
				console.log("Ok : " + item);
			},
			error: (error: unknown) => {
				console.log("Error");
			},
			complete: () => {
				console.log('complete');
			},
		};
		const stream = new Observable((observer) => {
			observer.next(1);
			observer.next(2);
			observer.next(3);
			observer.complete();
		});
		stream.subscribe(myObserver);
	}
}
