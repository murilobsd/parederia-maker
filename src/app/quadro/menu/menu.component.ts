import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Item} from './menu.model';

@Component({
  selector: 'mk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  /* Itens que montam no menu do quadro.*/
  items:Array<Item> = [
    new Item({id: 'color', symbol: '/assets/img/pick_color.svg'}),
    new Item({id: 'upload', symbol: '/assets/img/upload_pic.svg'}),
    new Item({id: 'rotate', symbol: '/assets/img/rotate.svg'}),
    new Item({id: 'delete', symbol: '/assets/img/delete.svg'})
  ]

  openClass: string = "openmenu menuhover";
  clickClass: string = "openmenu menuhover hidemainmenu cross";
  defaultClass: string = "openmenu";
  isOpen: boolean = false;
  @Output() alteradoOrientacao = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  changeStyle($event) {
    this.defaultClass = $event.type == 'mouseover' ? this.openClass : "openmenu";
    this.isOpen = false;
  }

  openMenu($event) {
    this.defaultClass = this.clickClass;
    this.isOpen = true;
  }

  alterarOrientacao($event) {
    console.log("Pedido de altercao do quadro.");
    this.alteradoOrientacao.emit($event);
  }

}
