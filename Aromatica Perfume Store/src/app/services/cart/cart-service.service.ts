import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems(): any[] {
    return this.cartItemsSubject.getValue();
  }

  addToCart(product: any): void {
    const currentCartItems = this.getCartItems();
    const itemExists = currentCartItems.some(item => item.product.id === product.id);

    if (itemExists) {
      const updatedCartItems = currentCartItems.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      this.cartItemsSubject.next(updatedCartItems);
    } else {
      this.cartItemsSubject.next([...currentCartItems, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const updatedCartItems = this.getCartItems().filter(item => item.product.id !== productId);
    this.cartItemsSubject.next(updatedCartItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }

  decreaseQuantity(productId: number): void {
    const currentCartItems = this.getCartItems();
    const updatedCartItems = currentCartItems.map(item => {
      if (item.product.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.cartItemsSubject.next(updatedCartItems);
  }

  increaseQuantity(productId: number): void {
    const currentCartItems = this.getCartItems();
    const updatedCartItems = currentCartItems.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.cartItemsSubject.next(updatedCartItems);
  }

  getTotalPrice(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}
