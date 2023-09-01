import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/@components/login/login.component';
import { RegisterComponent } from './auth/@components/register/register.component';
import { ResetPasswordComponent } from './auth/@components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LogoutComponent } from './auth/@components/logout/logout.component';
import { LeadsMenuComponent } from './pages/leads-menu/leads-menu.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'dashboard-menu', component: DashboardComponent },
    { path: 'leads-menu', component: LeadsMenuComponent }, 
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
