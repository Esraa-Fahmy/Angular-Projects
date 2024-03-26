 import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  private mockData: any[] = [ {
    id: 1,
    title: 'COCO CHANEL',
    description: 'Description of product 1',
    price: 500,
    Quntity: 10,
    image: '../../../assets/bd0c67e932080c9d287e7d812be0a2b9.jpg'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2',
    price: 2000,
    Quntity: 10,
    image: '../../../assets/15911d316ed095a94f67d360bf3b7a1a.jpg'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description of product 3',
    price: 4000,
    Quntity: 10,
    image: '../../../assets/2448c5147c782ac2dd70fd37d468e40c.jpg'
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description of product 4',
    price: 1300,
    Quntity: 10,
    image: '../../../assets/af5a4469f97a4c884c2ad1fe639f8bb0.jpg'
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description of product 5',
    price: 2900,
    Quntity: 10,
    image: '../../../assets/ea17d0afe2a334cb50b933f0665d3636.jpg'
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description of product 6',
    price: 2600,
    Quntity: 10,

    image: '../../../assets/c1c09184eddd91e98fe388fd9411a7df.jpg'
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description of product 7',
    price: 4100,
    Quntity: 10,

    image: '../../../assets/bd0c67e932080c9d287e7d812be0a2b9.jpg'
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description of product 8',
    price: 6000,
    Quntity: 10,

    image: '../../../assets/ef21718b4905e9bb9a64b6df4ef6d985.jpg'
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Description of product 9',
    price: 700,
    Quntity: 10,

    image: '../../../assets/60ac76525698edaff7c15e588a04fae9.jpg'
  },
  {
    id: 10,
    title: 'Product 10',
    description: 'Description of product 10',
    price: 980,
    Quntity: 10,

    image: '../../../assets/26db28102ea0ecf4aeff571e962b5e6d.jpg'
  },
  {
    id: 11,
    title: 'Product 11',
    description: 'Description of product 11',
    price: 870,
    Quntity: 10,

    image: '../../../assets/cc819adcccfd6d39f77a8740ae187bfc.jpg'
  },
  {
    id: 12,
    title: 'Product 12',
    description: 'Description of product 2',
    price: 999,
    Quntity: 10,

    image: '../../../assets/0435dcc324eaa7f24e7b8b9b80ca8797.jpg'
  }]; // Your mock data here

  private mockDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.mockData);
  myData$: Observable<any[]> = this.mockDataSubject.asObservable();

  constructor() {}

  getData(): Observable<any[]> {
    return this.myData$;
  }

  updateProduct(updatedProduct: any): Observable<any[]> {
    const index = this.mockData.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.mockData[index] = updatedProduct;
      this.mockDataSubject.next([...this.mockData]);
    }
    return this.myData$;
  }
}
