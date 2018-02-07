import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  scale:number = 1000;
  date:number = Date.now();
//products: Product[];
products=[];
position:string="left";
 bvalue:boolean=false;
 pvalue:boolean=true;
 text:string="default";
 name:string="default";
 buttonval:number=0;
imageName:string="./assets/apple.jpg";
mycolor:string = 'Yellow';
mybgcolor:string = 'blue';
cone:boolean=true;
ctwo:boolean=false;
toggle(){
  this.cone=!this.cone;
  this.ctwo=!this.ctwo;
}


//Product = {id:1,name:'book',price:100};
  constructor(private prodService : ProductService) { 
    setTimeout(() =>{
      this.bvalue=true;
  }, 2000);

  }
   
   // setTimeout(function(){this.bvalue=false;}, 10000);
   dispText(data:any){
    this.pvalue=false;

    this.text = data.target.value;
  }

  incBval(data:any){
    

  this.buttonval++;
  }

  decBval(data:any){
    

    this.buttonval--;
  }
  
  display()
  {
  //  return ("id:"+this.id+" name:"+this.name+" price:"+this.price);
  
  
  }
/*discont()
{
 var disc_price:number;
  disc_price = this.product.price-(this.product.price*20/100);
  return (disc_price);
}*/
  ngOnInit() {
    //this.products = this.prodService.getProducts();
    this.prodService.getProductsHttp().subscribe(resProdData=>this.products=resProdData);
  }
  
   
}
