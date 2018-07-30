import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quadro } from '../quadro/quadro.model';

@Component({
  selector: 'mk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() state: string = "show";
  @Input() quadros: Array<Quadro> = [];
  @Output() clicadoQuadro = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  adicionarQuadro(quadro: Quadro) {
    console.log("Clicado quadro: ", quadro.name);
    this.clicadoQuadro.emit(quadro);
  }

}
