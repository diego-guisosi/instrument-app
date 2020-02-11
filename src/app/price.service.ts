import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from './price';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  url = 'http://localhost:8080/prices';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Price[]> {
    return this.http.get<Price[]>(this.url);
  }

  getHighestAndMostRecent(symbol: string): Observable<number> {
    // e.g. http://localhost:8080/prices/PETR4/max
    const maxPriceBySymbolUrl = `${this.url}/${symbol}/max`;
    return this.http.get<number>(maxPriceBySymbolUrl);
  }

}
