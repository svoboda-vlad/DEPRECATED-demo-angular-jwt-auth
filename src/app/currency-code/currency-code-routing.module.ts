import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyCodeAddComponent } from '../currency-code-add/currency-code-add.component';
import { CurrencyCodeComponent } from './currency-code.component';

const routes: Routes = [
  { path: '', component: CurrencyCodeComponent },
  { path: 'add', component: CurrencyCodeAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyCodeRoutingModule { }
