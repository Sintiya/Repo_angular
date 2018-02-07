export default class Square implements Shap
{
     color: string;
     side: number;
    constructor(color1, side1) {
        
        this.color = color1;
        this.side = side1;
       

    }
     area():number {
        return this.side*this.side
    }
     perimeter():number {
        return 4*this.side
}
 displayDetails() {
    var sarea = this.area();
    var speri = this.perimeter();
    console.log(`area of square is ${sarea}`);
    console.log(`perimeter of square is ${speri}`);
     
    }
}
export interface Shap
{
 area(side):number;
 perimeter(side):number;
}
