import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { ForgetPwdPageComponent } from './pages/forget-pwd-page/forget-pwd-page.component';
import { ResetPwdPageComponent } from './pages/reset-pwd-page/reset-pwd-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    NewAccountPageComponent,
    ForgetPwdPageComponent,
    ResetPwdPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
