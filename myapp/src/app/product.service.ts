import { Injectable } from '@angular/core';
import { Product } from './product';

import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _url:string = 'http://localhost:4200/../assets/product.json'
products:Product;
  constructor(private _http:Http) { 
    //this.product = {id:1,name:'book',price:100};
  }
getProducts():Product[]{
return  [{id:1,name:'book',price:100},{id:2,name:'book',price:200},{id:3,name:'book',price:300}];
}
getProductsHttp(){
  return this._http.get(this._url).map((response:Response)=>response.json());
  }
}
