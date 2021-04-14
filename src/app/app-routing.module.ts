import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then(m => m.NoteModule)
  },
  {
    path: 'hello-restricted',
    loadChildren: () => import('./hello-restricted/hello-restricted.module').then(m => m.HelloRestrictedModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
