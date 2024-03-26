import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MydataService } from 'src/app/services/mydata/mydata.service';
import { CartService } from 'src/app/services/cart/cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number; 
  productDetails: any;

  constructor(private route: ActivatedRoute, private myDataService: MydataService , private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('productId'));
      this.getProductDetails();
    });
  }

  getProductDetails() {
    this.myDataService.getData().subscribe((data: any) => {
      this.productDetails = data.find((product: any) => product.id === this.productId);
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
