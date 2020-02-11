import { PriceService } from './../price.service';
import { Component, OnInit } from '@angular/core';
import { Price } from '../price';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  prices: Price[];

  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit() {
    this.priceService.getAll().subscribe(prices => this.prices = prices);
  }

}
