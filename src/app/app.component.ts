import { Component } from '@angular/core';
// import * as res from 'res';
import { Quadro } from './quadro/quadro.model';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState: string = "hidden";

  quadros: Array<Quadro> = [
    new Quadro({'name': 'Moldura A2', 'largura': 440, 
                'altura':615, 'preco': 12.12, 
                'id': 'quadro_a2'})
  ];

  constructor() {}

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }

}
