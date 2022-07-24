// Classes in ES5 are only syntax sugar of prototypical inheritance.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Members defined on the prototype
    draw () {
        console.log('This is drawing from the prototype.');
    }
}

let c = new Circle(1);
