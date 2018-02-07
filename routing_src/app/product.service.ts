import { Injectable } from '@angular/core';
import {Product} from './Product';
@Injectable()
export class ProductService {
  product:Product;
  constructor() { }
  products = [
    {productno:111,productname:'IPhone',manufacturer:'Apple',price:'Rs. 45000'},
    {productno:121,productname:'IPad',manufacturer:'Apple',price:'Rs. 34500'},
    {productno:131,productname:'IPod',manufacturer:'Apple',price:'Rs. 32222'},
    {productno:141,productname:'Moto G',manufacturer:'Motorola',price:'Rs. 35678'},
    {productno:151,productname:'Moto X',manufacturer:'Motorola',price:'Rs. 43434'},
    {productno:161,productname:'Moto E',manufacturer:'Motorola',price:'Rs. 67676'},
    {productno:171,productname:'Moto Z',manufacturer:'Motorola',price:'Rs. 23123'},
    {productno:181,productname:'Samsung Note 3',manufacturer:'Samsung',price:'Rs. 43211'},
    {productno:191,productname:'Samsung Note 4',manufacturer:'Samsung',price:'Rs. 76433'},
    {productno:201,productname:'Samsung Note 5',manufacturer:'Samsung',price:'Rs. 37890'}
  ];
    getProducts()
    {
      return this.products;
    }

  getProductByProductNo(pno:number)
  {

    for(let i=0;i<this.products.length;i++)
    {
      if (this.products[i].productno==pno)
      {
        this.product = this.products[i];
        return this.product;
      }
    }
  }
}
