import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


  loadProducts() {
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
    this.loadProducts();
  }

  editProduct(productId: number) {
    this.router.navigate(['/edit-product', productId]);
  }
}
