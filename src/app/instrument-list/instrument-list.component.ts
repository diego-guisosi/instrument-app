import { InstrumentService } from './../instrument.service';
import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  instruments: Instrument[];

  constructor(
    private instrumentService: InstrumentService,
    private priceService: PriceService
  ) { }

  ngOnInit() {
    this.initInstrumentsWithHighestPrices();
  }

  initInstrumentsWithHighestPrices() {
    this.instrumentService.getAll().subscribe(instruments => {
      this.fillHighestPrices(instruments);
      this.instruments = instruments;
    });
  }

  fillHighestPrices(instruments: Instrument[]) {
    instruments.forEach(instrument => this.fillHighestPrice(instrument));
  }

  fillHighestPrice(instrument: Instrument) {
    this.priceService.getHighestAndMostRecent(instrument.symbol).subscribe(price => {
      instrument.highestPrice = price;
    });
  }

}
