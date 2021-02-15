import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloRestrictedComponent } from './hello-restricted.component';

const routes: Routes = [{ path: '', component: HelloRestrictedComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRestrictedRoutingModule { }
