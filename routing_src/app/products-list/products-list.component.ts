import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {

  constructor(private productsList:ProductService) { }

  products = [];

  ngOnInit() {

    this.products = this.productsList.getProducts();
  }

}
