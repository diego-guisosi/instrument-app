import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
   declarations: [
      AppComponent,
      InstrumentListComponent,
      TopBarComponent,
      PriceListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: InstrumentListComponent },
        { path: 'instrumentos', component: InstrumentListComponent },
        { path: 'precos', component: PriceListComponent }
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
