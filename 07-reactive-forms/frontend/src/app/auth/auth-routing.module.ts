import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { ForgetPwdPageComponent } from './pages/forget-pwd-page/forget-pwd-page.component';
import { ResetPwdPageComponent } from './pages/reset-pwd-page/reset-pwd-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'new-account', component: NewAccountPageComponent },
      { path: 'forget', component: ForgetPwdPageComponent },
      { path: 'reset', component: ResetPwdPageComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
