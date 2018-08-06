import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cor } from './cor.model';
import { CoresService } from '../../shared';

@Component({
  selector: 'mk-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.scss']
})
export class CoresComponent implements OnInit {

  @Output() alteradoCor = new EventEmitter<string>();

  cores: Array<Cor> = [];

  constructor(private corService: CoresService) { }

  ngOnInit() {
    this.obterTodasCores();
  }

  alterarCor(cor: string) {
    console.log('Solicitando alteração de cor da borda.', cor);
    this.alteradoCor.emit(cor);
  }

  obterTodasCores() {
    this.corService.getAll().subscribe(
      (data: any) => { this.cores = data; },
      error => console.log(error));
  }

}
