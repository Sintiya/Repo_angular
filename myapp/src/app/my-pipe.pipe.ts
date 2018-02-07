import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(price:number,scale:number): string {
    if(price<scale){
      return "LOW";
    }
    else{
      return "HIGH";
    }
  }

}
