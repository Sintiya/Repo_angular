"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(color1, side1) {
        this.color = color1;
        this.side = side1;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    Square.prototype.perimeter = function () {
        return 4 * this.side;
    };
    Square.prototype.displayDetails = function () {
        var sarea = this.area();
        var speri = this.perimeter();
        console.log("area of square is " + sarea);
        console.log("perimeter of square is " + speri);
    };
    return Square;
}());
exports["default"] = Square;
//var obj = new Square("black", 2);
//obj.displayDetails();
