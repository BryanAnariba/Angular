import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    NewAccountPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
