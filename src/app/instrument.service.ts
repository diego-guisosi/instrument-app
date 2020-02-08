import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrument } from './instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  url = 'http://localhost:8080/instruments';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Instrument[]>(this.url);
  }

}
