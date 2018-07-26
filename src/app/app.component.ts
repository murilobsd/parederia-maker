import { Component } from '@angular/core';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState: string = "show";

  quadros: Array<string> = ["modulra 1", "modulra 1", "modulra 1", 
  "modulra 1", "modulra 1", "modulra 1", "modulra 1", "modulra 1", "modulra 1", 
  "modulra 1", "modulra 1", "modulra 1", "modulra 1", "modulra 1", ];

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }
}
