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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
