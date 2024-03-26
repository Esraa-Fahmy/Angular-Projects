import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemsCount: number = 0;
  navbarOpen: boolean = false; // Define the property navbarOpen

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItemsCount = cartItems.length;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen; 
  }
}
