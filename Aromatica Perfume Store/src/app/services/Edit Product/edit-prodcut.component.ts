import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-prodcut.component.html',
  styleUrls: ['./edit-prodcut.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number = 0;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;

    this.product = this.productService.getProductById(this.productId);
  }

  saveChanges() {
    this.productService.updateProduct(this.product);

    this.router.navigate(['/product-list']);
  }
}
