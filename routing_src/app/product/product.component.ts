import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

})
export class ProductComponent implements OnInit
{

    prodNo:any;
    product:Product;
    constructor(private productService:ProductService,private route: ActivatedRoute){}
    ngOnInit()
    {
      this.route.params.subscribe(params =>
        {
        this.prodNo = params['prodno'];  // 'prodno' is the same name used while configuring the route in app.module.ts
        this.product = this.productService.getProductByProductNo(this.prodNo); // retrieving the product details
        })
  }
}
