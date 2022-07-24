// Call the super constructor
// 新需求：每个Shape对象都应该有一个color属性，每个Circle也需要有一个color属性
// (也许某个形状不需要color属性，所以不需要下面讨论的设置？)

function Shape(color) {
    this.color = color;
}

function Circle(radius, color) {
    // 调用上级构造函数
    // 下面的设置无用，因为Shape里面的this默认指向windo(在浏览器中)，
    // 下面的语句的实际作用是window.color = color
    // Shape(color);

    // 正确的做法：
    // 让Shop()中的this指向当前函数中this指向的对象，也就是新创建的Circle实例
    // 这样color属性就添加在新创建的Circle对象上了
    Shape.call(this, color); 
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let s = new Shape('red');
let c = new Circle(30, 'green');