import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/Home/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/Home/home.component';
import { ProductFormComponent } from './components/Product-Form/product-form.component';
import { ProductListComponent } from './components/Product-List/product-list.component';
import { EditProductComponent } from './services/Edit Product/edit-prodcut.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    ProductDetailsComponent,
    RegisterComponent,
    HomeComponent,
    ProductFormComponent,
    ProductListComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
