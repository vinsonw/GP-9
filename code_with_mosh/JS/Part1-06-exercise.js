
// // Adding Elements

// console.log('// Adding Elements');

// const arr = [3, 4];

// // Add End
// console.log(arr.push(5,6)); // 返回新数组的长度，即4
// console.log(arr);

// // Add Beginning
// console.log(arr.unshift(1,2)); // 返回新数组的长度，即6
// console.log(arr);

// // Add middle
// console.log(arr.splice(3,0,'after 3')); // return the deleted elemetns, 此例中为空数组
// console.log(arr);


// // Finding elements

// console.log('// Finding Primitive Elements');

// const numbers = [1, 2, 3, 1, 4];

// // 找到时返回第一个item所在的索引，找不到返回-1
// console.log(numbers.indexOf(1));

// // 可以用第二个参数制定开始搜索的索引
// console.log(numbers.indexOf(1,2)); // 从索引为2的项开始搜索

// // 注意，区分数据类型
// console.log(numbers.indexOf('1'));

// // 找到时返回最后一个item所在的索引，找不到返回-1
// console.log(numbers.lastIndexOf(1));

// // 测试数组是否包含某item
// console.log(numbers.indexOf(1) != -1);

// // 更优雅的方法
// console.log(numbers.includes(1))


// console.log('// Finding Reference Elements');

// const arr = [
//     {value: 1, name:'House'},
//     {value: 2, name: 'Season2'},
//     {value: 3, name: 'Season3'}
// ];

// // 通过函数过滤（查找）arr的值
// // 类似python中的filter函数
// const result = arr.find(
//     function (item) {
//         return item.value>1;
//     }
// )

// console.log(result);


// // 还有语法一致的findIndex，只是返回的是index

// const resultIndex = arr.findIndex(
//     function (item) {
//         return item.value>1;
//     }
// )

// console.log(resultIndex);

// // ↑↑ 注意find/findIndex只返回第一个符合条件的项

// // ES6 Arrow Function ES6中的箭头函数
// // 可以简化传入函数的形式

// console.log('// Using Arrow Function');
// const result1 = arr.find( el => el.name == 'Season3' );
// console.log(result1);

// Removing elements

// Remove from the end 
// const arr = [1, 2, 3, 4];
// let poped = arr.pop();
// console.log(poped);
// console.log(arr);


// Remove from the beginning
// let first = arr.shift();
// console.log(first);
// console.log(arr);

// Remove from the middle
// let middle = arr.splice(1,2);
// console.log(middle);
// console.log(arr);

// Emptying an array 四种方法清空数组

// let arr = [1,2,3,4];

// Solution 1
// arr 不能被const修饰
// 且该array无其他引用
// let another = arr;
// arr = []
// console.log(arr);
// console.log(another);

// Solution 2
// 不受数组的其他引用影响
// arr.length = 0; 
// console.log(arr);

// Solution 3
// 不受数组的其他引用影响
// arr.splice(0, arr.length);
// console.log(arr);

// Solution 4

// let len = arr.length;
// for (let i=0; i<len; i++)
//     arr.pop();

// while (arr.length > 0)
//     arr.pop();
// console.log(arr);

// ↑↑ Solution 4元素多时可能会有性能问题
// 推荐Solution 2/Solution 1(数组无其他变量引用时)


// // Combing and slicing arrays 拼接数组和对数组切片
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = first.concat(second);
// // [1,2,3,4,5,6]
// console.log(combined);
// // [1,2,3]
// console.log(first);
// // [4,5,6]
// console.log(second);

// // 切片语法(start, end)的规则和Python一致
// let sliced = combined.slice(3, 5);
// // [4,5]
// console.log(sliced);
// // [1,2,3,4,5,6]
// console.log(combined);

// // 如果slice()不传入参数，相当于将原来的数组复制一份
// let slice1 = combined.slice();

// // ↑↑ 注意concat()/slice()方法均不修改原来的数组，只是用来生成新的数组

// // 另外，数组中如果有object作为item，新生成的数组复制的只是引用（原数组中的object也只是引用）
// let first1 = [{value: 10}];
// let combined1 = first1.concat(second);
// // TODO 很奇怪，下面的comboned1中的{value:10}也被改成了{value:11}, 尽管还没有执行到改变值的那一步
// console.log(combined1);
// first1[0].value = 11;
// // comboned1中的{value:10}被改成了{value:11}
// console.log(combined1);


// // Spread syntax Spread语法简化数组操作
// let first = [{value:10}, 2, 3];
// let second = [4, 5, 6];

// // 更直观的数组合并表示
// const combined = [...first, ...second];
// console.log(combined)

// // 还可以加入其他项
// const combined1 = ['a', ...first, 'b', ...second];
// console.log(combined1)

// // 还简化了复制数组的语法
// // const copy = combined.slice()
// const copy = [...combined];
// console.log(copy);

// // TODO 下面的语句无效，即无法将first的第一个item(是一个object)整体替换为一个数字 
// first[0] = 9;
// // 下面语句正常工作
// first[0].value = 9;
// console.log(copy);


// Iterating an array 遍历一个数组

// const numbers = [1, 2, 3];


// // 已经学过的let of循环可以遍历数组
// for (let number of numbers)
//     console.log(number);

// // 数组的forEach()方法也可以遍历数组
// // forEach()方法接受一个callback function作为参数，
// // 该函数描述要对数组的每一项做什么
// numbers.forEach(
//     function (number) {
//         console.log(number);
//     }
// )

// // 箭头函数简化写法
// // 注意console.log(number)后面没有加分号，因为此代码不在代码块({})当中
// numbers.forEach( number => console.log(number) );
// // 还可以同时遍历index
// // 注意(number, index)的顺序已经规定好了，和它们的名字无关
// numbers.forEach( (number,index) => console.log(index, number) );

// Joing arrays 拼接数组

// const numbers = [1, 2, 3];
// // join()返回一个字符串
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'this is my first message';
// // split()返回一个数组
// const parts = message.split(' ');
// console.log(parts);
// const combined = parts.join('-');
// console.log(combined);


// Array Sorting 数组排序

// const arr = [3,1,2];
// // 升序排序
// arr.sort()
// // 注意sort方法改变了原来的数组
// console.log(arr);

// // 降序排序
// arr.reverse()
// console.log(arr);

// // 数组中对象元素的排序
// const objArr = [
//     {id:1, title: 'Node.js'},
//     {id:2, title: 'JavaScript'}
// ]

// // 此时sort()方法需要传入一个函数作为参数，即Comparator function
// // 类似C语言中qsort()函数需要传入一个Comparator function
// // 该函数的基本结构：function (a, b) { return -1/0/1 }
// // 返回1代表a应该在b后面，返回-1代表a应该在b前面，返回0二者相等
// // 见： https://www.geeksforgeeks.org/comparator-function-of-qsort-in-c/

// objArr.sort(
//     function (a, b) {
//         // a.title的ascii顺序小于b.title时，a排在前面
//         if (a.title < b.title) return -1;
//         // a.title的ascii顺序大于b.title时，a排在后面
//         if (a.title > b.title) return 1;
//         return 0;
//     }
// );

// console.log(objArr);

// Testing the elements of an Array 测试数组中的元素

// const numbers = [1, 2, -3];

// // every()发现一个不符合条件的元素即停止搜索
// const allPositvie = numbers.every(function(value) { 
//     return value >= 0; 
// });
// console.log(allPositvie) 

// // some()发现一个符合条件的元素即停止搜索
// const atLeastOnePositive = numbers.some(function(value) {
//    return value >= 0; 
// });

// console.log(atLeastOnePositive);

// Filtering an array 数组过滤

// const numbers = [1,-1,2,3];
// // const filtered = numbers.filter(function(value) {
// //     return value >= 0;
// // });
// // A more elegant way:
// const filtered = numbers.filter( value => value > 0 );
// console.log(filtered);

// Mapping an array
// const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(value => value>=0 );
// const items = filtered.map(n => '<li>' + n + '</li>');
// console.log(items);
// // 默认用逗号链接
// // const html = items.join();
// // 显式制定''连接
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// // 注意下面的({value:n})必须加小括号，否则会被识别为代码块，
// // 而不是对象
// const items1 = filtered.map(n =>  ({value: n}));
// console.log(items1);

// // Chaining 链条写法
// const items2 = numbers
//                     .filter(value => value>=0)
//                     .map(n => ({value:n}))
//                     .filter(obj => obj.value>2)
//                     .map(obj => ({value: '山川异域，风月同天'}));
//                     // 下面可以继续写
// console.log(items2);

// Reducing an Array Reduce数组
// const numbers = [1, -1, 2, 3];

// // 传统求和
// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);
// // reduce()方式求和：
// // 工作原理如下：
// // round 1: a = 0, c = 1 => a = 1
// // round 2: a = 1, c = -1 => a = 0
// // round 3: a = 0, c = 2  => a = 2
// // round 4: a = 2, c =3   =>  a = 5
// const sum1 = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // accumulator的初始值是0
// console.log(sum1);

// // 如果不初始化accumulator
// // round 1: a = 1, c = -1 => a = 0
// // round 2: a = 0, c = 2  => a = 2
// // round 3: a = 2, c =3   =>  a = 5
// // const sum2 = numbers.reduce((accumulator, currentValue) => {
// //     return accumulator + currentValue;
// // });
// // 简写：
// const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum2);

// 写出第一个元素减去后面所有元素的结果
// 应该是-3
// const sum3 = numbers.reduce((a,c) => a-c);
// console.log(sum3);

// // Exercise 1
// function arrayFromRange(min, max) {
//     let arr = [];
//     for (let i=min; i<max+1; i++)
//         arr.push(i);
//     return arr;
// }
// const numbers = arrayFromRange(-9, 8);
// console.log(numbers);

// Exercise 2 Includes
// function searchElement(array, searchElement) {
//     // let isIncluded = false;
//     // for (let i of array)
//     //     if (i === searchElement)
//     //     {
//     //         isIncluded = true;
//     //         break;
//     //     }
//     // return isIncluded;

//     // 更优雅的写法
//     for (let i of array)
//         if (i === searchElement)
//             return true;
//     return false;
// }

// const numbers = [1, -1, 2, 3];

// console.log(searchElement(numbers, 3));

// Exercise 03 Except
// function except(array, excluded) {
//     let output = [];
//     for (let e of excluded) {
//         output = array.filter(el => el !== e);
//         array = output;
//     }
//     return output;
// }

// const numbers = [1, 2, 3, 4, 1, 1];
// const output = except(numbers, [1, 2, 4]);
// console.log(output);


// Exercise 04 Moving an element 移动数组中的元素
// function move(array, index, offset) {
//     let newArr = [ ...array  ];
//     let newIndex = index + offset;
//     if (newIndex >= newArr.length || newIndex < 0)
//         console.error('Invalid offset');
//     const el = newArr.splice(index, 1)[0];
//     newArr.splice(newIndex,0,el);
//     return newArr;
// }

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 2);
// console.log(output);

// Exercise 05 Count Occurrence 计数元素出现的次数
// function countOccurrences(array, searchElement) {
//     // return array
//     //         .map(el => el === searchElement)
//     //         .reduce((a,c) => a+c);

//     // Mosh's way(roughly)
//     return  array.reduce( (a, c) => a + (c === searchElement), 0 );
// }


// const numbers = [1, 3, 3, 4, 3];
// const count = countOccurrences(numbers, 3);
// console.log(count);

// Exercise 06 Get max 获取最大值
// 这里再强化以下reduce()方法的语法：
// => 的部分是accumulator的值的表达式
function getMax(array) {
    return array.reduce((a,c) => a > c ? a : c);
}

const numbers = [1, 3, 9, 4, 3];
console.log(getMax(numbers));

// Exercise 07 Movies 
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

const selected = movies
                    .filter(el => el.year === 2018 && el.rating > 4)
                    .sort( (a, b) => {
                        if (a.rating > b.rating) return -1; // -1代表a在前
                        if (a.rating < b.rating) return 1;
                        return 0;
                    })
                    .map(el => el.title);
console.log(selected);

