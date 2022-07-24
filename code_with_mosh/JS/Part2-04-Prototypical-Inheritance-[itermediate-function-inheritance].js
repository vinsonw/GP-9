// Intermediate Function Inheritance
// 就是将继承的动作封装为一个函数


function Shape(color) {
    this.color = color;
}

Shape.prototype.fly = function () {
    console.log('Eager for the sky is embeded in your gene~');
}

// Mosh's version says the second arg is Parent
// But I think it's actually GrandParent, which Parent derives from.
function extend(Child, GrandParent) {
    Child.prototype = Object.create(GrandParent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color); 
    this.radius = radius;
}
extend(Circle, Shape);

function Square(size) {
    this.size = size;
}
extend(Square, Shape);

let s = new Shape('red');
let c = new Circle(30, 'green');
let sq = new Square(40, 'blue');