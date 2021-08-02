import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateCurrencyCodeComponent } from '../exchange-rate-currency-code/exchange-rate-currency-code.component';
import { ExchangeRateDetailComponent } from '../exchange-rate-detail/exchange-rate-detail.component';
import { ExchangeRateComponent } from './exchange-rate.component';

const routes: Routes = [
  { path: '', component: ExchangeRateComponent },
  { path: 'currency-code/:id', component: ExchangeRateCurrencyCodeComponent },
  { path: ':id/detail', component: ExchangeRateDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRateRoutingModule { }
