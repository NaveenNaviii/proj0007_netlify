import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './angularcomponents/clock/clock.component';
import { CrudOperationComponent } from './angularcomponents/crud-operation/crud-operation.component';
import { HttpClientModuleComponent } from './angularcomponents/http-client-module/http-client-module.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"http",component:HttpClientModuleComponent},
  {path:'crud',component:CrudOperationComponent},
  {path:'clock',component:ClockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
