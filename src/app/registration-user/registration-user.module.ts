import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationUserRoutingModule } from './registration-user-routing.module';
import { RegistrationUserComponent } from './registration-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrationUserComponent],
  imports: [
    CommonModule,
    RegistrationUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrationUserModule { }
