// Prototypical Inheritance
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Drawing a circle with radius: ', this.radius);
    };
}

// 复用代码思路1： 通过对给对象原型增加方法，从而让对象继承到相应的方法
// 这个思路面临的问题：如果之后需要创建一个Square对象，Square对象也需要move方法怎么办？
// Circle.prototype.move = function () {
//     console.log('move');
// }

// 复用代码思路2：重新指定Cricle对象的原型
// 思路：创建一个Shape对象的原型，
// ? 在其上（实际上是在相应的构造函数上）定义Shape对象具有的公共方法
// ! 注意上面这句话是错的，对象具有的公共方法需要定义在对象原型上(此例中即需要定义在Shape.prototype上)，定义在对象构造函数的方法是对象自己具有方法(Instance Memeber/Own Property)
function Shape() {
    this.drag = function () {
        console.log('Dragging.');
    };
}

Shape.prototype.move = function () {
    console.log('move on the Shape.prototype.');
}

// * 重点来了

// * 改变构造函数prototype属性引用的对象(方法1)
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.drag(); // 报错，此时Circle.prototype非new Shape()方式创建 
// * 改变构造函数prototype属性引用的对象(方法2)
Circle.prototype = new Shape();
Circle.prototype.drag(); // 正常调用
// !区别在于方法1创建的newCircleBase不会有Shape构造函数里的方法，而方法2有

// * 重设Circle.prototype(新对象)的constructor引用的构造函数
Circle.prototype.constructor = Circle;
// * 完成 对象构造函数 ⇄ 对象原型 的相互引用

let c = new Circle(20);
let s = new Shape();
c.draw();
c.move();

// ! In the middle of this, what happens on the Chrome devtools console
// ! is driving me crazy, see:
// https://stackoverflow.com/questions/71934960/why-is-the-proto-of-object-prototype-another-object-prototype


// Reset constructor function 重设构造函数
// 在重设Circle.prototype = Object.create(Shape.prototype)之前有：
// Circle.prototype === { circleBase, an object created using Object.create(Object.prototype) }
// { circleBase }.constructor === Circle;
// * 即Circle和{ circleBase }各自通过自己的prototype和constructor属性引用对方
// 之后有：
// # Circle.prototype === { newCircleBase, an object created using Object.create(Shape.prototype) }
// * Circle通过prototype属性引用的对象变为了{ newCircleBase }
// ? 但是{ new CircleBase }的constructor属性引用的依然是Shape, 而不是Circle:
// ! 但是{ new CircleBase }目前没有constructor
// * 作为最佳实践，需要完成这一步:
// # { newCircleBase }.constructor === Shape;
// ? 这样new Circle() 创造的对象的constructor都引用Circle了，即正确的引用
// ! 注意：new Circle() 创建的对象本身没有constructor属性，但是可继承Circle.prototype的constructor属性


// Call the super constructor
// 新需求：每个Shape对象都应该有一个color属性，每个Circle也需要有一个color属性
// (也许某个形状不需要color属性，所以不需要下面讨论的设置？)

// Intermediate Function Inheritance
// extend(Child, Parent)

// Method Overriding

// Polymorphism 

// When to use inheritance
// + drawbacks of inheritance
//      - Avoid creating inheritance hierarchies -- they're very fragile!
//      - Keep inheritance to only 1 level if you want to use it
//      - "Favor Composition over Inheritance"
// + Alternative approach to inheritance: Composition
//      - Create objects(representing capability) instead of creating inheritance hierarchy.
//      - Give object capabilities according to it's definition.
//      - Example: Defind capabilities: canEat/canWalk/canSwim
//          + Person: canEat+canWalk
//          + Goldfish: canEat+canSwim
//      - In Javascript, we use 'Mixin' to achieve Composition

// Mixins