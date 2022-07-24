// When to use inheritance
// + Drawbacks of inheritance
//      - Avoid creating inheritance hierarchies -- they're very fragile!
//      - Keep inheritance to only 1 level if you want to use it
//      - "Favor Composition over Inheritance"
// + Alternative approach to inheritance: Composition
//      - Create objects(representing capabilities) instead of creating inheritance hierarchy.
//      - Give object capabilities according to it's definition.
//      - Example: Defind capabilities: canEat/canWalk/canSwim
//          + Person: canEat+canWalk
//          + Goldfish: canEat+canSwim
//      - In Javascript, we use 'Mixin' to achieve Composition

// Mixins
function Mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swimming');
    }
};

function Person() {

}

// From ES6, we could create object from the content
// of other objects like this
// Object.assign(Person.prototype, canEat, canWalk);
// 将此逻辑封装为一个函数
Mixin(Person.prototype, canEat, canWalk);

// Now, a Person object could `eat` and `walk`
const person = new Person();

function Goldfish() {

}
Mixin(Goldfish.prototype, canEat, canSwim);

// Now, a Goldfish object could `eat` and `swim`
const goldfish = new Goldfish();