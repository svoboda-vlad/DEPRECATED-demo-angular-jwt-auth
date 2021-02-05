import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
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
