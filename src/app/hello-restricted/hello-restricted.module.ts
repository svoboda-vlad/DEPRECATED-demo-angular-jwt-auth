import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRestrictedRoutingModule } from './hello-restricted-routing.module';
import { HelloRestrictedComponent } from './hello-restricted.component';


@NgModule({
  declarations: [HelloRestrictedComponent],
  imports: [
    CommonModule,
    HelloRestrictedRoutingModule
  ]
})
export class HelloRestrictedModule { }
