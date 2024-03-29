import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { ExchangeRateComponent } from './exchange-rate.component';
import { ExchangeRateAddComponent } from '../exchange-rate-add/exchange-rate-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeRateCurrencyCodeComponent } from '../exchange-rate-currency-code/exchange-rate-currency-code.component';
import { ExchangeRateDetailComponent } from '../exchange-rate-detail/exchange-rate-detail.component';
import { ExchangeRateEditComponent } from '../exchange-rate-edit/exchange-rate-edit.component';

@NgModule({
  declarations: [ExchangeRateComponent, ExchangeRateAddComponent, ExchangeRateCurrencyCodeComponent, ExchangeRateDetailComponent, ExchangeRateEditComponent],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExchangeRateModule { }
