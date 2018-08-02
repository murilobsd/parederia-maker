import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quadro } from '../quadro/quadro.model';
import {QuadrosService} from '../shared';

@Component({
  selector: 'mk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() state = 'show';
  @Output() clicadoQuadro = new EventEmitter();
  quadros: Array<Quadro> = [];

  constructor(private quadroService: QuadrosService) { }

  ngOnInit() {
    this.obterTodosQuadros();
  }

  adicionarQuadro(quadro: Quadro) {
    console.log('Clicado quadro: ', quadro.name);
    this.clicadoQuadro.emit(quadro);
  }

  obterTodosQuadros() {
    this.quadroService.getAll().subscribe(
      (data: any) => { this.quadros = data; },
      error => console.log(error));
  }

}
