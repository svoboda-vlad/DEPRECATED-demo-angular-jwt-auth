import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationUserComponent } from './registration-user.component';

const routes: Routes = [{ path: '', component: RegistrationUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationUserRoutingModule { }
