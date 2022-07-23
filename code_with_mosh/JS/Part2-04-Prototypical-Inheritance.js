// Prototypical Inheritance
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Drawing a circle with radius: ', this.radius);
    };
}

function Shape() {
    // this.move = function () {
    //     console.log('move');
    // };
}

// 复用代码思路1： 通过对给对象原型增加方法，从而让对象继承到相应的方法
// 这样比较低效，代码也不清晰
Circle.prototype.move = function () {
    console.log('move');
}

// 复用代码思路2：重新指定Cricle对象的原型
// 思路：创建一个Shape对象的原型，
// ? 在其上（实际上是在相应的构造函数上）定义Shape对象具有的公共方法
// ! 注意上面这句话是错的，在对象原型上定义的属性属于对象的原型(对象可以继承这些属性)，在对象构造函数上定义的属性属于对象自身
function Shape() {
    this.drag = function () {
        console.log('Dragging.');
    };
}

Shape.prototype.move = function () {
    console.log('move on the Shape.prototype.');
}

// 重点来了
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let c = new Circle(20);
let s = new Shape();
c.draw();
c.move();

// In the middle of this, what happens on the Chrome devtools console
// is driving me crazy, see:
// https://stackoverflow.com/questions/71934960/why-is-the-proto-of-object-prototype-another-object-prototype


// // Reset constructor function


// // Call the super constructor


// // Intermediate Function Inheritance

// // extend(Child, Parent)


// // Method Overriding


// // Polymorphism 

