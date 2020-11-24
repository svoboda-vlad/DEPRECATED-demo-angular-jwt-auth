import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
