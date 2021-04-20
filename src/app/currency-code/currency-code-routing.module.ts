import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyCodeComponent } from './currency-code.component';

const routes: Routes = [{ path: '', component: CurrencyCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyCodeRoutingModule { }
