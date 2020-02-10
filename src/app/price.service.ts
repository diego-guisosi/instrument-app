import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from './price';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  url = 'http://localhost:8080/prices';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Price[]>(this.url);
  }

}
