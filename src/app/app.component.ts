import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: BsModalRef;
  menuState: string = "show";

  quadros: Array<string> = ["modulra 1", "modulra 1", "modulra 1", 
  "modulra 1", "modulra 1", "modulra 1", "modulra 1", "modulra 1"];

  constructor(private modalService: BsModalService) {}

  toggleMenu() {
    this.menuState = this.menuState === 'show' ? 'hidden' : 'show';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
