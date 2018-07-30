import { Component, OnInit, Input } from '@angular/core';
import { Quadro } from '../quadro/quadro.model';

@Component({
  selector: 'mk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() state: string = "show";
  @Input() quadros: Array<Quadro> = [];

  constructor() { }

  ngOnInit() {
  }

}
