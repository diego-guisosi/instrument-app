import { InstrumentService } from './../instrument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  instruments;

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.instruments = this.instrumentService.getAll();
  }

}
