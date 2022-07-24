// 先解释提升(hoisting)的基础知识，已经学过，这里不重复

// 回到本节内容:
// * 1. 像ES6中的let/const一样，class 不会提升
// * 2. class 一样有class declaration和class expression两种方式(比照function declaration和function expression)
// * 3. 基本上所有人都使用class declaration，建议使用，代码更清晰

// 报错: Part2-05-hoisting.js:8 Uncaught ReferenceError: Cannot access 'Circle' before initialization
const c = new Circle();

// class declaration
class Circle {

}

// class expression
const Square = class {

};
