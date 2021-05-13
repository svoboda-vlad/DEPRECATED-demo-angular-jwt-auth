import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { ExchangeRateComponent } from './exchange-rate.component';
import { ExchangeRateAddComponent } from '../exchange-rate-add/exchange-rate-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeRateCurrencyCodeComponent } from '../exchange-rate-currency-code/exchange-rate-currency-code.component';


@NgModule({
  declarations: [ExchangeRateComponent, ExchangeRateAddComponent, ExchangeRateCurrencyCodeComponent],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExchangeRateModule { }
