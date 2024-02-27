import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RoutingComponent } from './routing/routing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { UserComponent } from './routing/user/user.component';
import { UserCardComponent } from './routing/user/user-card/user-card.component';
import { Com1Component } from './routing/home/com1/com1.component';
import { Com2Component } from './routing/home/com2/com2.component';
import { LoginComponent } from './routing/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './routing/user-form/user-form.component';
import { ChartsComponent } from './charts/charts.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
// import { UserApiTableComponent } from './routing/user-api-table/user-api-table.component';
import { ToastrModule } from 'ngx-toastr';
import {MaterialModule} from './material/material.module'
import { Chart, registerables } from 'chart.js';
import { JwtInterceptor } from './interceptors/auth.interceptor';
Chart.register(...registerables)
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    UserCardComponent,
    Com1Component,
    Com2Component,
    LoginComponent,
    UserFormComponent,
    ChartsComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    // TestcomComponent,
    // UserApiTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
