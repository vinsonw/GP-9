// Exercise 1

function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function () {
   console.log('focused') ;
};

function HtmlSelectElement(items = []) {
    this.addItem = function (item) {
        this.items.push(item);
    };

    // Vinson's version:
    // this.items = new Array();
    // Mosh's version:
    this.items = items;

    this.removeItem = function (item) {
        let index = this.items.indexOf(item);
        if (index != -1) this.items.splice(index, 1);
    };
}

HtmlSelectElement.prototype = new HtmlElement();
// Under Mosh's reminder
// 为新的HtmlSelectElement.prototype增加constructor属性
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


const h = new HtmlElement();
const hs = new HtmlSelectElement();