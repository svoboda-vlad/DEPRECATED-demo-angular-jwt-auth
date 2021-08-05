import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'currency-code',
    loadChildren: () => import('./currency-code/currency-code.module').then(m => m.CurrencyCodeModule)
  },
  {
    path: 'exchange-rate',
    loadChildren: () => import('./exchange-rate/exchange-rate.module').then(m => m.ExchangeRateModule)
  },
  {
    path: 'registration-user',
    loadChildren: () => import('./registration-user/registration-user.module').then(m => m.RegistrationUserModule)
  },
  {
    path: 'google-login',
    loadChildren: () => import('./google-login/google-login.module').then(m => m.GoogleLoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: {
      role: 'ROLE_ADMIN'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
