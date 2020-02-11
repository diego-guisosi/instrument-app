import { Observable } from 'rxjs';
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

  getAll(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(this.url);
  }

}
