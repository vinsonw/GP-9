// Polymorphism 多态
// 名词解释：
// Poly means 'many' and 'morph' means 'form' 
// Polymorphism means "the quality of being in many forms"

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.fly = function () {
    console.log('Being able to fly is a gift from your ancestry.');
}

function Circle(radius, color) {
    Shape.call(this, color); 
    this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.fly = function () {
    Shape.prototype.fly.call();
    console.log("I want to fly by my own!") ;
}

function Square() {

}
extend(Square, Shape);

Square.prototype.fly = function () {
    console.log('Flying in the Square way~')
}

let c = new Circle(30, 'green');
let sq = new Square();

// Polymorphism in action! 多态正当时！
// => 同名方法作用在不同对象上有不同的行为
[c, sq].forEach(
    el => el.fly()
);