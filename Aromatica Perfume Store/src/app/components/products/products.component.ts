import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata/mydata.service';
import { CartService } from '../../services/cart/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    myData$: any;

    constructor(private myDataService: MydataService, private cartService: CartService, private router: Router) {}

    ngOnInit(): void {
        this.myData$ = this.myDataService.getData();
    }

    addToCart(product: any) {
      this.cartService.addToCart(product);
    }
}
