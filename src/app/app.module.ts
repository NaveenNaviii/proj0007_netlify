import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientModuleComponent } from './angularcomponents/http-client-module/http-client-module.component';
import { CrudOperationComponent } from './angularcomponents/crud-operation/crud-operation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployeeComponent } from './angularcomponents/crud-operation/employee/employee.component';
import { ClockComponent } from './angularcomponents/clock/clock.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HttpClientModuleComponent,
    CrudOperationComponent,
    EmployeeComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
