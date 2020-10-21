import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'De campo',
      price: 1,
    },
    {
      id: 2,
      name: 'Cocacola',
      category: 'Drink',
      description: 'Azucar',
      price: 1,
    },
    {
      id: 3,
      name: 'Oreo',
      category: 'Galleta',
      description: 'Azucar',
      price: 2,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter((product) => product.id == id);
  }
}
