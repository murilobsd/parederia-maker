import { Component } from '@angular/core';
// import * as res from 'res';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState: string = "hidden";

  quadros: Array<string> = ["modulra 1", "modulra 1", "modulra 1", 
  "modulra 1", "modulra 1", "modulra 1", "modulra 1", "modulra 1"];

  constructor() {}

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }

}
