import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductService} from './product.service';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    DepartmentListComponent,
    ProductsListComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'employees',component:EmployeesListComponent},
      {path:'departments',component:DepartmentListComponent},
      {path:'products',component:ProductsListComponent},
      {path:'products/:prodno',component:ProductComponent},
      {path: '**', component:HomeComponent}
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
