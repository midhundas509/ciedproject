import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/theme/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardMenuComponent } from './pages/dashboard-menu/dashboard-menu.component';
import { AddLeadsComponent } from './components/theme/add-leads/add-leads.component';
import { LeadsMenuComponent } from './pages/leads-menu/leads-menu.component';
// import { SearchBarComponent } from './components/theme/search-bar/search-bar.component';
import { FilterPipe } from './filter.pipe';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardMenuComponent,
    AddLeadsComponent,
    // SearchBarComponent,
    FilterPipe,
    LeadsMenuComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
