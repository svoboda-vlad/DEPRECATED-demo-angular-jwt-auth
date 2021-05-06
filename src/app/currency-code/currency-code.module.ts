import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyCodeRoutingModule } from './currency-code-routing.module';
import { CurrencyCodeComponent } from './currency-code.component';
import { CurrencyCodeAddComponent } from '../currency-code-add/currency-code-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CurrencyCodeComponent, CurrencyCodeAddComponent],
  imports: [
    CommonModule,
    CurrencyCodeRoutingModule,
    ReactiveFormsModule
  ]
})
export class CurrencyCodeModule { }
