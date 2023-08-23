// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './@components/login/login.component';
import { RegisterComponent } from './@components/register/register.component';
import { ResetPasswordComponent } from './@components/reset-password/reset-password.component';
import { LogoutComponent } from './@components/logout/logout.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
  ],
})
export class AuthModule {}
