import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mk-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {

  @Input() altura: number;
  @Input() largura: number;
  @Output() alteradoOrientacao = new EventEmitter();

  larguraThumb: number;
  alturaThumb: number;

  constructor() { }

  ngOnInit() {
    this.alturaThumb = (this.altura * 0.6) - 16;
    this.larguraThumb = (this.largura * 0.6) - 16;
  }

  alteraOrientacao() {
    this.alteradoOrientacao.emit(true);
    this.larguraThumb = this.larguraThumb === (this.largura * 0.6) - 16 ? (this.altura * 0.6) - 16 : (this.largura * 0.6) - 16;
    this.alturaThumb = this.alturaThumb === (this.altura * 0.6) - 16 ? (this.largura * 0.6) - 16 : (this.altura * 0.6) - 16;
  }
}
