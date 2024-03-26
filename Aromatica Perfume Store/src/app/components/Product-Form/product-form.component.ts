import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productId: number =0;
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  productQuantity: number = 0;

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    this.productService.addProduct({
      id: this.productId,
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice,
      quntity: this.productQuantity
    });

    this.router.navigate(['/product-list']);
  }
}
