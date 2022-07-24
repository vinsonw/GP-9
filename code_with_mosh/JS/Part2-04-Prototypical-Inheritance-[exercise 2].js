// Exercise 2 Polymorphism

function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function () {
   console.log('focused') ;
};

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        let index = this.items.indexOf(item);
        if (index != -1) this.items.splice(index, 1);
    };

    this.render = function () {
        let str =  this.items.reduce((a,c) => a += `  <option>${c}</option>\n`,'');
        // console.log('str',str);
        return `
<select>
${str}</select>`; 

// Mosh's version: (template string could be embedded)
//         return `
// <select>${this.items.map(item => `
//   <option>${item}</option>`).join('')}
// </select>`;

    };
}

HtmlSelectElement.prototype = new HtmlElement();
// Under Mosh's reminder
// 为新的HtmlSelectElement.prototype增加constructor属性
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement (src) {
    this.src = src;
    this.render = function () {
        return `<img src="${this.src}">`
    };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

let sl = new HtmlSelectElement(['what', 'are', 'you', 'doing', 'here']);
let img = new HtmlImageElement('http://cat.com');
const elements = [sl, img];
for (let el of elements)
    console.log(el.render());