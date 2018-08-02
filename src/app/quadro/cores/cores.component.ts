import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cor } from './cor.model';

@Component({
  selector: 'mk-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.scss']
})
export class CoresComponent implements OnInit {

  @Output() alteradoCor = new EventEmitter<string>();

  cores: Array<Cor> = [
    new Cor({hex: '#1c1b20'}),
    new Cor({hex: '#f4f6fb'})
  ];

  constructor() { }

  ngOnInit() {
  }

  alterarCor(cor: string) {
    console.log('Solicitando alteração de cor da borda.', cor);
    this.alteradoCor.emit(cor);
  }

}
