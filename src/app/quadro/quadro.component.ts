import { Component, OnInit, Input } from '@angular/core';
import { Cor } from './cores/cor.model';


@Component({
  selector: 'mk-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.scss']
})
export class QuadroComponent implements OnInit {

  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };

  @Input() id: string;
  @Input() preco: number;
  @Input() cor = 'black';
  @Input() altura: number;
  @Input() largura: number;
  @Input() position: object;

  larguraQuadro: number;
  alturaQuadro: number;
  constructor() {

  }

  ngOnInit() {
    this.larguraQuadro = (this.largura * 0.6);
    this.alturaQuadro = (this.altura * 0.6);
 }

  onStart(event) {
    // console.log('started output:', event);
  }

  onStop(event) {
    // console.log('stopped output:', event);
  }

  onMoving(event) {
    this.movingOffset.x = event.x;
    this.movingOffset.y = event.y;
  }

  onMoveEnd(event) {
    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
  }

  alteraOrientacao() {
    console.log('Pedido de alteracao da orientacao recebido.');
    this.larguraQuadro = this.larguraQuadro === (this.largura * 0.6) ? (this.altura * 0.6) : (this.largura * 0.6);
    this.alturaQuadro = this.alturaQuadro === (this.altura * 0.6) ? (this.largura * 0.6) : (this.altura * 0.6);
  }

  alteraCor(cor: string) {
    console.log('Perdido de alteração de cor da borda.', cor);
    this.cor = cor;
  }

}
