import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyCodeRoutingModule } from './currency-code-routing.module';
import { CurrencyCodeComponent } from './currency-code.component';


@NgModule({
  declarations: [CurrencyCodeComponent],
  imports: [
    CommonModule,
    CurrencyCodeRoutingModule
  ]
})
export class CurrencyCodeModule { }
