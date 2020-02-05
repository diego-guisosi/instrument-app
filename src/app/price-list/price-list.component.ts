import { PriceService } from './../price.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  prices;

  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit() {
    this.prices = this.priceService.getAll();
  }

}
