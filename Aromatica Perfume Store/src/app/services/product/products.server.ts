import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL: string = 'http://localhost:3005';

  constructor(public http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.baseURL, product);
  }

  editProduct(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`);
  }
}
