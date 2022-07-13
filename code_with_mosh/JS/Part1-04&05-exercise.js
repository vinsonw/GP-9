// console.log('hello world');

// ////////////////////////
// 4-Control Flow (1h25m)
// ////////////////////////

// Exercise 1
// function max_of_two(a, b) {
//     return a > b? a: b;
// }

// console.log(max_of_two(10,4))

//Exercise 2
// function isLandscape(width, height) {
//     // return width > height ? true : false;
//     // better version:
//     return width > height;
// }

//Exercise 3
// FizzBuzz

// function fizzbuzz(n) {
//     if (typeof n !== 'number') 
//         {console.log("not a number"); return;}
//     if (n % 3 === 0) {
//         if (n % 5 === 0)
//             console.log('FizzBuzz!');
//         else 
//             console.log('Fizz');
//     }
//     else if (n % 5 === 0)
//         console.log('Buzz');
//     else 
//         console.log(n);
// }

// fizzbuzz(6);
// fizzbuzz(15);
// fizzbuzz(20);
// fizzbuzz('hello');
// fizzbuzz(7);

// Exercise 4 : Demerit Point

// function demerit_point(speed) {
//     // Unexpectedly, this also works for speed below 70
//     // let point = Math.floor((speed-70) / 5);
//     // a better way:
//     const point = Math.floor((speed-70) / 5);
//     if (point >= 12)  {
//         console.log('License Suspended');
//     }
//     else if (point < 1)
//         console.log('You are good');
//     else
//         console.log('Point ' + point);
// }

// demerit_point(70);
// demerit_point(74);
// demerit_point(75);
// demerit_point(120);
// demerit_point(160);
// demerit_point(30);


// Exercise 5 : Odd and even number

// function showNumbers(limit) {
//     for (let i=0; i<=limit; i++) {
//     //     if (i % 2 === 0)
//     //         console.log(i, "EVEN");
//     //     else
//     //         console.log(i, "ODD");

//    // A better version
//    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//    console.log(i, message);
//     }
// }

// showNumbers(10);


// Exercise 6 : Count truthy

// function countTruthy(array) {
//     let cnt = 0;
//     for (let i in array) {
//         if (array[i]) cnt++;
//     }
//     return cnt;
// }

// console.log(countTruthy([2, 0, '', false, 1, 3]));


// Exercise 7: String Properties
// const movie = {
//     title: 'How to get rich without work',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'Spikes'

// }

// function showProperties(obj) {
//     console.log('title', obj['title']); // 'title' as index has to be wrapped in quotes
//     console.log('director', obj['director']);
// }


// showProperties(movie);


// Exercise 8 : Sum of multiples of 3 and 5

// function sum(limit) {
//     let sum = 0;
//     for (let i=1; i<=limit; i++) {
//         if (i % 3 === 0) sum += i;
//         else if (i % 5 === 0) sum += i;
//     }

//     return sum;
// }

// console.log(sum(10));


// Exercise 9 grade
// function calculateGrade(marks) {
//     let sum = 0;
//     let cnt = 0
//     for (let i in marks) {
//         sum += marks[i];
//         cnt++;
//     }
//     let avg = sum / cnt;  

//     if (avg < 60) return 'F';
//     else if (avg < 70) return 'D';
//     else if (avg < 80) return 'C';
//     else if (avg < 90) return 'B';
//     else return 'A';
// }

// console.log(calculateGrade([80,80,50]));


//Exercise 10 Stars
// function showStarts(rows) {
//     for (let i=1; i<=rows; i++) {
//         let pattern = ''
//         for (let j=1; j<=i; j++)
//             pattern += '*'
//         console.log(pattern);
//     }
// }

// showStarts(10);

// Exercise showPrimes
// ...


/*
 * Objects
*/

// "Objects are collections of key-value pairs."

// 直接创建一个对象
// const circle = {
//     radius: 2,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('DRAW');
//     }
// };

// circle.draw();

// Factory Function 工厂函数创建对象
// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('DRAW');
//         }
//     }
// }

// let circle = createCircle(1);
// circle.draw();

// a simplified version 简化写法
// function createCircle(radius) {
//     return {
//         // 当key==value，可以简写为一个
//         radius,
//         // 对象方法可以简写如下
//         draw () {
//             console.log('DRAW from createCircle()');
//         }
//     }
// }

// let circle = createCircle(1);
// circle.draw();

// Constructor Function 构造器函数创建对象
// 注意此时函数名使用Pascal命名法
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('DRAW from Circle() constructor!');
//     }
// }

// 下面语句运行时发生了三件事：
// 1. Circle()创建了一个空对象，类似 let x = {} ;
// 2. this指针指向这个空对象，并初始化对象
// 3. 返回this指针的值给const circle
// const circle = new Circle(1);
// circle.draw();


// 对象是dynamic(动态的)，也就是对象创建以后可以增加和删除属性
// circle.color = 'yellow';
// console.log('circle.color ADDED.');
// console.log('circle.color==', circle.color);
// delete circle.color;
// console.log('circle.color DELETED.');
// console.log('circle.color==', circle.color);


// Constructor Property
// const circle1 = new Circle(1);
// const circle2 = createCircle(1);

// 每一个对象(object)都会有一个construct属性，返回创建该对象的函数
// circle1.constructor 会返回Circle()构造器函数
// circle2.constructor 会返回Object() { [native code] }，即JS默认的对象构造器函数


// Functions are objects 在JS中函数也是对象
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('DRAW from Circle() constructor!');
//     }

//     return this;
// }

// 可以打印Circle这个对象的属性值
// console.log(Circle.name); // 函数名
// console.log(Circle.length); // 函数参数列表的长度
// console.log(Circle.constructor) // 函数对象的构造器函数 Function () { [native code] }

// 当我们使用(构造器)函数创建对象时：
// const circle =  new Circle(1);

// 等价于同时传一个空对象和函数参数给构造器
// const circle1 = Circle.call({}, 2);
// ↑ 但是此方法创建的对象不会自动返回（不同于new方法），除非函数体结尾加上 "return this", 否则返回undefined

// Circle.apply() 功能与 Circle.call()相同，只是函数的参数要以数组的形式传入
// const circle2 = Circle.apply({}, [3]);

// 拓展：不加new操作符(operator)会发生什么
// const circle_ =  Circle(8);
// 等价于将window(一个全局对象)和函数参数传给构造器
// const circle_1 = Circle.call(window, 2);

// Primitive types(Primitives) / Reference types(Objects) 原始类型和引用类型
// "Primitives are copied by value"
// "Objects are copied by reference"
// 和C语言中通过指针改变结构体的属性值同理
// 严格来说都是按值传递，只是"."操作符可以跨作用域工作，类似C语言中的(ptr->attr)


// Copied by value
// function increase(number) {
//     // number是的作用域仅限于此函数内部，函数调用结束后number被销毁
//     number++;
// }

// let num = 10;
// increase(num);
// console.log('num == '  + num); // 依然输出10

// Copied by reference
// let obj = { value: 10 };

// function increase1(obj) {
//     obj.value++;
// }

// increase1(obj);
// console.log('obj.value == '  + obj.value); // 输出11

/* Enumerating properties of objects 遍历对象的属性
*/

// const circle = new Circle(2);

// for (let key in circle)
//     console.log(key, circle[key]);

// 下面语句会报错，因为"circle is not iterable"
// for (let item of circle)
//     console.log(item);

// 使用Object.keys()方法遍历key
// for (let key of Object.keys(circle))
//     console.log(key);

// 使用Object.entries()方法遍历entry(键值对)
// for (let entry of Object.entries(circle))
//     console.log(entry);

// Object.entries返回一个数组，每个数组元素又是一个数组，该数组中的元素分别是键，和对应的值
// 示例如下：
// obj = {value:10, name:'what'};
// Object.entries(obj)
// [['value', 10], ['name', 'what']]

// in 操作符：检测某key是否存在于特定对象
// 注意，key要以字符串的形式传入
// if ('radius' in circle) console.log('yes');

// Cloning an object 克隆一个对象
// const circle = {
//     radius: 1,
//     draw () {
//         console.log('Draw');
//     }
// };

// // 第一种方式
// console.log('第一种方式');
// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// console.log(another);

// // 第二种方式
// console.log('第二种方式');
// const another1 = Object.assign({}, circle);
// console.log(another1);
// // 还可以为新对象增加键值对
// const another2 = Object.assign({
//     color: 'red'
// }, circle);

// console.log(another2);

// // 第三种方式(spread syntax)
// console.log('第三种方式');
// const another3 = { ...circle };
// console.log(another3);


// Garbage Collector 垃圾回收器
// In JS, grabage would be automatically taken care of by the 
// Garbage Collector


// Math
// Math is a built-in object that has properties and 
// methods for mathematical constants and functions. 
// It's not a function object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// String 字符串方法
// const message = ' This is my first string. ';
// const another = new String('hello');

// console.log(message.length);
// console.log(message[0]);
// console.log(message.includes('my'));
// console.log(message.startsWith('This'));
// console.log(message.endsWith('ge'));
// console.log(message.indexOf('my'));
// console.log(
//     message.replace('my', 'your')
// );
// console.log(
//     message.toUpperCase()
// );

// console.log (
//     message.trim()
// );
// console.log (
//     // deprecated
//     // message.trimLeft()
//     message.trimStart()
// );

// console.log (
//     message.trimEnd()
// );

// console.log(
//     message.split(' ')
// );

// Date 日期对象
// 根据VSCode的代码提示，Date()构造函数的参数语法有5种
// const now = new Date();
// // this will now work
// const date1 = new Date('July 7th 2022 19:11'); // invalid date
// // this will work -- Ordinal number as the day is not permitted.
// const date1_ = new Date('July 7 2022 19:11');
// const date2 = new Date(2022, 6, 7);

// // 改变年份
// now.setFullYear(2021);

// // 改变月份
// now.setMonth(5); // 5代表6月June

// console.log(
//     now.toDateString() // 输出日期
// );
// console.log(
//     now.toTimeString() // 输出时间
// );
// console.log(
//     now.toISOString() // 同时输出日期和时间
// );

// ///////////////////////
// 5-Objects (1h20m)
// ///////////////////////

// Exercise 1
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function createAddress(street, city, zipcode) {
    // 注意，下面的是简写形式（当key==value,只写一个name即可）
    return {
        street,
        city,
        zipcode
    };
}

function showAddress(address) {
    // console.log(address.street, address.city, address.zipcode);
    for (let key in address)
        console.log(key, ": " ,address[key]);
}

// C is for "Constructor"
const addressC = new Address('Contructor St.', 'Washington DC', '00001');
showAddress(addressC);

// F is for "Factory"
const addressF = createAddress('Factory St.', 'Washington DC', '00001');
showAddress(addressF);


// Exercise 3 Object equality
let address1 = new Address('b', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areEqual(address1, address2) {
    let areEqual = true;
    for (let key in address1)
        if (address1[key] !== address2[key]) {
            areEqual = false;
            break;
        }
    return areEqual;
}

function areSame(address1, address2) {
    return (address1 === address2);
}

console.log('areEqual:', areEqual(address1, address2));
console.log('areSame:', areSame(address1, address2));
let address3 = address2;
console.log('areSame:', areSame(address3, address2));

// Exercise 4 Blog Post Object

const post = {
    title: 'hello world',
    body: 'This is a fake body',
    author: 'Adam Sanders',
    views: 23,
    // duplicate with the 'comments'
    // comments_num: 3,
    comments: [
        {author: 'a', body:'aa'},
        {author: 'b', body:'bb'},
        {author: 'c', body:'cc'},
    ],
    isLive: true,
}

console.log(post);

// Exercise 5 Constructor Function
function DraftPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let draftPost = new DraftPost('aa', 'bb', 'Adam Sanders');
console.log(draftPost);

// Exercise 6 Price Range Object

// function PriceRange(level) {
//     let priceDesc = ['low', 'medium', 'high'];
//     let symbolDesc = ['$', '$$', '$$$'];
//     this.price = priceDesc[level-1];
//     this.symbol = symbolDesc[level-1];
// }

// let price = new PriceRange(2);
// console.log(price);

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
    { averagePerPerson: 5 }
]

// ↑↑ 这样，就可以用price range去筛选restaurant

