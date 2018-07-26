import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() state: string = "show";
  @Input() quadros: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
