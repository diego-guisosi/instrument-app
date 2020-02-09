import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from './price';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  url = '/assets/prices.json';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Price[]>(this.url);
  }

}
