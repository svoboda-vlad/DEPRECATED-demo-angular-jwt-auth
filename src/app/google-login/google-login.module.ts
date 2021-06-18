import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleLoginRoutingModule } from './google-login-routing.module';
import { GoogleLoginComponent } from './google-login.component';


@NgModule({
  declarations: [
    GoogleLoginComponent
  ],
  imports: [
    CommonModule,
    GoogleLoginRoutingModule
  ]
})
export class GoogleLoginModule { }
