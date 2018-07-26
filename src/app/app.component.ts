import { Component } from '@angular/core';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState: string = "show";

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }
}
