import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoresService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('assets/data/cores.json');
  }
}
