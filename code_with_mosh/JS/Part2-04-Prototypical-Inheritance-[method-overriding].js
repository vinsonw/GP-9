// Method overriding
// 利用JS在原型链上的方法查找机制来实现方法重写

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

// 注意: 给Circle.prototype添加fly()方法必须
// 在extend后面，否则添加的fly()方法会随着
// Circle.prototype的更换而丢失
// Circle.prototype.fly = function () {
//    console.log("I want to fly by my own!") ;
// }

// 然而，有时候的overriding还可能包含了继承
Circle.prototype.fly = function () {
    // 可以在定义Circle.prototype自己的fly()方法内容之前
    // 调用其原型上的fly()方法，注意传递this
    // (本例中Shape.prototype.fly()中没有用到this，所以不需要传递)
    Shape.prototype.fly.call();
    console.log("I want to fly by my own!") ;
}


let c = new Circle(30, 'green');
c.fly();