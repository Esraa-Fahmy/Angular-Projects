import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductFormComponent } from './components/Product-Form/product-form.component';
import { ProductListComponent } from './components/Product-List/product-list.component';
import { EditProductComponent } from './services/Edit Product/edit-prodcut.component';
const routes: Routes = [
  {
    path:'',
    component:ProductsComponent,

  },
  {
    path:'product-form',
    component:ProductFormComponent,

  },
  { path: 'login', component: LoginComponent },
  {
    path:'cart',
    component:CartComponent,

  },
  {
    path:'details/:productId',
    component:ProductDetailsComponent,

  },
  {
    path:'register',
    component:RegisterComponent,

  },

  {
    path: 'product-list',
    component: ProductListComponent,
  },
  { path: 'edit-product/:id', component: EditProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
