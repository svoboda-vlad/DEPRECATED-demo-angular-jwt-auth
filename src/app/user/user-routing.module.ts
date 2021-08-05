import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserEditComponent } from '../user-edit/user-edit.component';

const routes: Routes = [{
  path: '',
  component: UserDetailComponent
},
{
  path: 'edit',
  component: UserEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
