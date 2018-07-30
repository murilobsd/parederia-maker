import { Component, EventEmitter } from '@angular/core';
// import * as res from 'res';
import { Quadro } from './quadro/quadro.model';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState: string = "hidden";

  quadrosMenu: Array<Quadro> = [
    new Quadro({'name': 'Moldura A2', 'largura': 440, 
                'altura':615, 'preco': 12.12, 
                'id': 'quadro_a2'}),
    new Quadro({'name': 'Moldura A3', 'largura': 440, 
                'altura':615, 'preco': 12.12, 
                'id': 'quadro_a3'})
  ];


  quadros: Array<Quadro> = [];
  constructor() {
  }

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }

  quadroNaParede(quadro: Quadro) {
    quadro = this.setPosition(quadro);
    this.quadros.push(quadro);
  }

  private setPosition(quadro: Quadro): Quadro {
    let position = {
      'x': 100,
      'y': 100
    }
    console.log("Setando posicao inicial na parede: ", position);
    quadro.position = position;
    return quadro
  }

}
