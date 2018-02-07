import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { MyPipePipe } from './my-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MyPipePipe,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'prod', component:ProductComponent},
      {path:'contact', component:ContactComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
