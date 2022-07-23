
/* 
 !两种继承方式
 * classcial inheritance
    + C#/Java/Python...
 * prototypical inheritance
    + JavaScript


!每个对象都有一个Prototype(or parent),除了根对象(except the root object)
!"A prototype is just a regular object in memory."

!Multilevel Inheritance 多级继承
* "Objects created by a given constructor will have the same protyotype."
-> "All arrays created by Array() constructor have the same prototype"
!原型继承举例
* circle -> circleBase -> objectBase
* myArray -> arrayBase -> objectBase

 */


/* 
! Property Descriptor 属性描述器
* 默认情况下很多对象的很多属性是不能通过
* for loop 访问的
 */

let person = {name: 'Vinson'};
console.log(person)

// * 只能访问到键名name
for (let key in person)
    console.log(key);

// * 只返回["name"]
console.log(Object.keys(person)); 

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// * 控制台打印内容如下:
//{writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true
// numerable: false
// value: ƒ toString()
// writable: true
// [[Prototype]]: Object
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
});

// * 因为writable设置为false，下面的赋值语句无效
person.name = 'John';
// * 依然输出"Vinson"
console.log(person.name)

// * 因为defineProperty()中enumerable设置为false,现在name属性也访问不到了
// * 返回一个[]
console.log(Object.keys(person));
/* 
! Constructor Prototypes
 */
// Object.getPrototypeOf(myObj);

// * 下面两种方式获取到是同一对象，即myObj的原型对象
// myObj.__protyo__ (parent of myObj)
// Constructor.prototype (parent of myObj)

let obj = {};
// * 通过对象的__proto__获取其原型
obj.__proto__;
// * 通过调用Object的getPrototypeOf获取obj原型
Object.getPrototypeOf(obj);
// * 因为{}的构造函数是Object()，所以通过Object.prototype也能获取其原型
Object.prototype;

/* 
! Protyotype vs Instance Members
 */
// function Circle(radius) { //     this.radius = radius;
//     this.radius = radius;
//     this.draw = function () {
//        console.log('DRAW');
//     }
// }

// * 这里有个问题，每个对象都有一个一样的draw()方法
// const c1 = new Circle(1);
// const c2 = new Circle(2);

// * 通过把draw()定义在原型上，可以减少冗余的方法
// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.draw = function () {
//        console.log('DRAW');
// };
 
// * 现在c1和c2上没有draw方法，但依然可以通过原型继承来调用
// const c1 = new Circle(1);
// const c2 = new Circle(2);

// * 在原型上的方法和属性称为Prototype Members
// * 在对象上的方法和属性称为Instance Members
// * ↑↑ 二者可以相互调用



/* 
! Iterating Instance and Protyotype Members
 */
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
       console.log('DRAW');
};
 
const c1 = new Circle(1);

// 只返回Instance Members
console.log(Object.keys(c1));

// 返回Instance Members + Prototype Members
for (let key in c1) console.log(key);

// 检测某方法是否是对象自己的(Instance Member)
// 返回true
console.log(c1.hasOwnProperty('radius'));
// 返回false
console.log(c1.hasOwnProperty('draw'));

/* 
! Avoid Extending the Built-in Objects
 */
// ! "Don't modify objects you don't own!"

// ! Exercise 
// * "Premature optimization is the root of all evils."