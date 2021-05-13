import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateCurrencyCodeComponent } from '../exchange-rate-currency-code/exchange-rate-currency-code.component';
import { ExchangeRateComponent } from './exchange-rate.component';

const routes: Routes = [
  { path: '', component: ExchangeRateComponent },
  { path: 'currency-code/:id', component: ExchangeRateCurrencyCodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRateRoutingModule { }
