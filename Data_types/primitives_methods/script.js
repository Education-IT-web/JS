"use strict"
let roma = {
    name: "Рома",
    sayHi: function () {
        console.log("Привет, дружище!");
    }
};

roma.sayHi(); // Привет, дружище!


let str = "Привет";

console.log(str.toUpperCase()); // ПРИВЕТ

let n = 1.23456;

console.log(n.toFixed(2)); // 1.23

console.log(typeof 0); // "число"

console.log(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) {
    // zero возвращает "true", так как является объектом
    console.log("zero имеет «истинное» значение?!?");
}