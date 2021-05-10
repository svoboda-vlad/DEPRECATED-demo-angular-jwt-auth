import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { ExchangeRateComponent } from './exchange-rate.component';
import { ExchangeRateAddComponent } from '../exchange-rate-add/exchange-rate-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExchangeRateComponent, ExchangeRateAddComponent],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExchangeRateModule { }
