import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  products$: Observable<any[]> = this.productsSubject.asObservable();

  constructor() {
    this.initProducts();
  }
  private initProducts(): void {
    const sampleProducts = [
      { id: 1, name: 'Guess Perfume',description: 'This is Guess Perfume',price: 900, quntity: 8},
      { id: 2, name: 'Zara Perfume',description: 'This is Zara Perfume',price: 6000, quntity: 3},
      { id: 3, name: 'PK Perfume',description: 'This is PK Perfume',price: 990, quntity: 2},
      { id: 4, name: 'Vactoria Secret Perfume',description: 'This is VS Perfume',price: 1500, quntity: 6},
      { id: 5, name: 'Si Perfume',description: 'This is Si Perfume',price: 1290, quntity: 4},
    ];
    this.productsSubject.next(sampleProducts);
  }

  getProducts(): any[] {
    return this.productsSubject.getValue();
  }

  getProductById(id: number): any {
    return this.productsSubject.getValue().find(product => product.id === id);
  }

  addProduct(newProduct: any): void {
    newProduct.id = this.generateUniqueId();
    this.productsSubject.next([...this.productsSubject.getValue(), newProduct]);
  }

  updateProduct(updatedProduct: any): void {
    const index = this.productsSubject.getValue().findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      const updatedProducts = [...this.productsSubject.getValue()];
      updatedProducts[index] = updatedProduct;
      this.productsSubject.next(updatedProducts);
    }
  }

  deleteProduct(id: number): void {
    const filteredProducts = this.productsSubject.getValue().filter(product => product.id !== id);
    this.productsSubject.next(filteredProducts);
  }

  private generateUniqueId(): number {
    return Math.max(...this.productsSubject.getValue().map(product => product.id), 0) + 1;
  }
}
