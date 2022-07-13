// console.log('Hello World');

// Function Declaration vs Function Expression 声明型函数和赋值型函数

// Functon Declaration
// function walk() {
//     console.log('walk');
// }
// // ↑↑ BY CONVENTION, 声明函数的末尾不加分号，尽管加上也可以

// // Anonymous Function Expression
// let run = function () {
//     console.log('run');
// }; // 赋值语句需要加分号

// // Named Function Expression
// let run2 = function run2_fun() {
//     console.log('run2');
// };

// walk();
// run();
// run2();
// // 以下Named Function Expression无法调用（出错）
// // run2_fun();

// // Hoisting (声明)提升
// // Hoisting就是将函数声明提升到文件顶部的过程，
// // 运行时由JS引擎自动完成
// // bark()在定义前即可调用
// bark();
// function bark() {
//     console.log('bark');
// }

// // 对于Function Expression无此hoisting
// // 以下语句报错
// // Uncaught ReferenceError: Cannot access 'speak' before initialization
// speak();
// const speak = function () {
//     console.log('speak');
// };

// Arguments arguments对象

// function sum(a, b) {
//     return a + b;
// }

// // 只有头两个参数会被分别赋值给a，b
// console.log(sum(1, 2, 3, 4, 5));

// function sum() {
//     // JS的每个函数都有一个特别的arguments对象
//     console.log(arguments);
//     let sum = 0;
//     for (let arg of arguments) 
//         sum += arg;
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));

// The rest operator Rest操作符
// '...args'让args为参数列表
// function sum(...args) {
//     console.log(args);
//     return args.reduce((a,c ) => a+c);
// }
// console.log(sum(1, 2, 3, 4, 5, 10));


// ...prices只能放在最后面，这也是rest(剩余的)叫法的来源
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, c) => a + c);
//     return total * ( 1 - discount);
// }
// console.log(sum(0.1, 10,10));

// Defalut parameters 给函数参数设定默认值
// 传统方法
// function interest(principal, rate, years) {
//     rate = rate || 3.5;
//     years = years || 5;

//     return principal * rate / 100 * years;
// }

// ES6之后
// function interest(principal, rate=3.5, years=5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));

// 注意，设置一个默认参数值以后，如果该参数之后
// 还有参数，其他参数也建议设置默认值，否则会发生下面的情况：
// function interest(principal, rate=3.5, years) {
//     return principal * rate / 100 * years;
// }

// // 返回NaN，因为此时years==undefined
// console.log(interest(10000));
// // 返回NaN, 此时第二个参数5被赋予rate(覆盖默认值3.5),
// // year依然是undefined
// console.log(interest(10000, 5));
// // hack的方法，可以这样，但不建议：
// console.log(interest(10000, undefined, 5))

// Getters and setters Getters和Setters

// getters: access properties
// setters: change(mutate) them


// 未经修饰的方法
// const person = {
//     firstName: 'Vinson',
//     lastName: "Wei",
//     fullName() {
//         return`${person.firstName} ${person.lastName}` 
//     }
// };

// console.log(person.fullName());

// const person = {
//     firstName: 'Vinson',
//     lastName: "Wei",
//     get fullName() {
//         return`${person.firstName} ${person.lastName}` 
//     }
// };

// 此时不用()去调用了
// console.log(person.fullName);

// 再加上Setter
// const person = {
//     firstName: 'Vinson',
//     lastName: "Wei",
//     get fullName() {
//         return`${person.firstName} ${person.lastName}` 
//     },
//     // 注意set需要设置对象的属性值，所以需要接受参数，此例为value
//     set fullName(value)  {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'Vinson Wei';
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);

// catch...try.. catch...try...错误处理
// 接上节内容，如果setter传入的内容不合适，会出错
// const person = {
//     firstName: 'Vinson',
//     lastName: "Wei",
//     get fullName() {
//         return`${person.firstName} ${person.lastName}` 
//     },
//     set fullName(value)  {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// 以下报错ncaught TypeError: Cannot read properties of null (reading 'split') at set fullName [as fullName]
// person.fullName = null;
// console.log(person.firstName);

// 加入错误处理的逻辑如下
// const person = {
//     firstName: 'Vinson',
//     lastName: "Wei",
//     get fullName() {
//         return`${person.firstName} ${person.lastName}` 
//     },
//     set fullName(value)  {
//         // 传统方法：defensive programming
//         // 如果接收到的类型不符合要求，返回（终止setting过程）
//         // if (typeof value !== 'string') return;

//         // 现代方法
//         // 1. 设置Exception
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');

//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error("Enter a first and last name.");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// // 2. catch exception
// try {
//     // person.fullName = null;
    
//     // 当设置为''时，又出现其他问题，继续增加exception的设置
//     person.fullName = '';
// }
// catch (e) {
//    alert(e);
// }




// Local vs. global scope

// 这个位置设置的变量为全局变量，所有函数均可访问
// 这是不好的实践，尽量避免
// const color = 'red';

// function start() {
//     const message = 'hi';
//     console.log(message);

//     if (true) {
           // another变量只在if代码块中可访问
//         const another = 'bye';
//     }
//     // another所在代码块外面引用another，报错：
//     // another is not defined at start 
//     console.log(another);
// }

// // 以下语句会报错
// // Uncaught ReferenceError: message is not defined
// // console.log(message);

// // 报错
// // another is not defined at start 
// start();

// 总结：
// const/let 的作用域为块作用域
// var 的作用域为函数作用域


// let vs. var let和var关键字的对比
// function start() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     // 以下语句会报错
//      // 注意，即使for loop不加{}，依然存在
//      // 代码块的概念，以下语句依然会报错
//     console.log(i);
// }
// // Uncaught ReferenceError: i is not defined at start
// start();


// function start() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     // 以下语句不会报错
//     // var定义的变量作用域为其所在函数
//     console.log(i);
// }

// start();

// 总结
// var => function-scoped
// ES6(ES2015): const/let => block-scoped

// var存在的另一个问题
// var color = 'red';
// let age = 30;
// ↑↑ var修饰的color会绑定到全局对象window上面

// 默认情况下定义的函数为全局函数，
// 也会绑定到window对象上面
// function sayHi() {
//     console.log('hi');
// }
// ↑↑ 现在，控制台上可调用window.sayHi()
// 这个问题在以后的课程中会有解决方法


// 'this' keyword this关键字
// What is 'this'?
// 'this' refereces the object that is executing the current function 

// 如果this出现在method中 -> this代表包含这个method的对象
// 如果this出现在function中-> this代表全局对象，这个全局对象在浏览器中是window，在Node中是global

// this出现在对象中
// const video = {
//     title: 'a',
//     play() {
//         // this代表video对象自身
//         console.log(this);
//     }
// };

// video.play();

// video.stop = function() {
//     // this依然代表video对象自身
//     // 只是此时多了一个stop方法
//     console.log(this);
// }

// video.stop();

// this出现在函数中
// function Video(title) {
//     // 如前所学，this指向一个新建的空对象 {}
//     // 然后将属性/属性值加入到这个空对象中
//     this.title = title;
//     console.log(this);

// }

// const v = new Video('b');

// 重点来了！
// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     this.tags.forEach( function(tag) {
//             console.log(tag);
//         }) 
//     }
// };

// // 正常工作
// video.showTags()

// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     this.tags.forEach(function(tag) {
//             // 在每个tag旁边同时显示title
//             // 但是很奇怪，this.title默认显示undefined
//             // 因为下面的this身处一个一般的
//             // callback函数中，所以this指向的
//             // 是全局对象window，而不是
//             // video对象
//             console.log(this.title, tag); }) 
//     }
// };

// video.showTags();
// 输出
// undefined 'a'
// undefined 'b'
// undefined 'c'

// 解决：（重点）
// forEach()的设计者已经想到类似的问题
// 所以forEacha()的第一个参数是回调函数
// 第二个参数就是thisArg，用来指定第一个参数（回调函数）
// 中this所指向的对象
// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     this.tags.forEach(
//                     function(tag) {
//                         console.log(this.title, tag); }, 
//                     this // 这里的this不在回调函数中，而处于showTags() {}范围，所以指向video对象 
//                     ) 
//     }
// };

// // 正常显示
// video.showTags();


// 接上节内容，不是所有的JS method都提供thisArg参数
// 所以还有其他的方法改变回调函数中所this指向的对象

// Change 'this'

// 第一种方法，不推荐
// 使用self
// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     const self = this; // 先保存this此时指向的对象的引用
//     this.tags.forEach(
//                     function(tag) {
//                         // 使用之前保存的引用，因为this此时指向的对象变了
//                         console.log(self.title, tag); }
//                     ) 
//     }
// };

// // 正常显示
// video.showTags();


// function playVideo(a, b) {
//     console.log(this);
//     console.log('a+b=', a+b);
// }

// // 控制台打印{name: 'Vinson'}
// // call方法的第一个参数为thisArg，为可选参数
// playVideo.call({name: 'Vinson'});
// // 控制台打印window
// playVideo();

// // apply与call仅是传参方法不同
// // apply的固定参数要以数组的形式传入
// playVideo.call({name: 'Vinson'}, 1, 2);
// playVideo.apply({name: 'Vinson'}, [1, 2]);

// // 还有bind()方法，将thisArg和特定函数绑定，
// // 然后返回一个绑定后的函数
// const fn = playVideo.bind({name: 'Bind Vinson'});
// fn(3, 2);
// // 还可以返回后立即调用
// playVideo.bind({name: 'Bind Vinson v2'})(3, 2);

// 回到先前的例子
// 第二种方法: bind()
// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     this.tags.forEach(
//                     function(tag) {
//                         console.log(this.title, tag);
//                     }.bind(this)
//                     )
//     }
// };

// 正常显示
// video.showTags();


// ES6以后的第三种方法，推荐； 
// 使用arrow function
// 因为箭头函数默认继承包含函数的this对象
// const video = {
//    title: 'a',
//    tags: ['a', 'b', 'c'],
//    showTags() {
//     this.tags.forEach(
//                         tag  => { console.log(this.title, tag); }
//                     )
//     }
// };

// video.showTags();

// Exercise 01 sum of arguments
// function sum(...args) {
//     // if (Array.isArray(args[0]))
//     //     return args[0].reduce((a,c) => a+c);

//     // Mosh's version:
//     if (args.length === 1 && Array.isArray(args[0]))
//         args = [...args[0]];
//     return args.reduce((a,c) => a+c);
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum([1, 2, 3, 4]));

// Exercise 02 - Areas of Circle

// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI*this.radius**2;
//     },
//     // 如果不设置setter, 对area赋值不会出错，但是会无效
//     // circle.area返回的依然是get area()返回的值
//     set area(value) {
//         throw new Error('不能设置圆的面积!');
//     }
// };

// console.log(circle.area);
// // 返回Uncaught Error: 不能设置圆的面积!
// circle.area = 30;
// circle.radius = 3;
// console.log(circle.area);


// Exercise 3 Error Handling
// 给下面的函数加上错误处理

// const numbers = [1, 2, 3, 4, 1, 2, 2];
// const count = countOccurrences(numbers, 2);
// console.log(count);

// function countOccurrences(array, searchElement) {
//     return array.reduce((a, c) => c === searchElement ? a+1: a, 0);
// }

// 上面的函数假设第一个参数是array，需要错误处理
const numbers = [1, 2, 3, 4, 1, 2, 2];
try {
    const count = countOccurrences(null, 4);
    console.log(count);
} catch (e) {
    // console.log(e);
    // Mosh's version(Error对象有一个message属性，其值为之前传入的错误信息)
    console.log(e.message);
}


function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error(`${array} is not an array.`);
    return array.reduce((a, c) => c === searchElement ? a+1: a, 0);
}
