// Static Methods 静态方法

// 语法：用static关键字标记类的方法

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    // Instance Mthod
    draw () {
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

}

// 调用静态方法，直接ClassName.staticMehtod()
const circle = Circle.parse('{"radius": 3}');
// console中静态方法不会出现在circle对象中或者其原型上
console.log(circle);