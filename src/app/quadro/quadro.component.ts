import { Component, OnInit, Input } from '@angular/core';


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
  @Input() cor: string;
  @Input() altura: number;
  @Input() largura: number;
  @Input() position: object;


  constructor() { }

  ngOnInit() {
  }

  onStart(event) {
    console.log('started output:', event);
  }

  onStop(event) {
    console.log('stopped output:', event);
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
    console.log("Pedido de alteracao da orientacao recebido");
    let altura = this.altura;
    let largura = this.largura;
    this.largura = altura;
    this.altura = largura;
  }

}
