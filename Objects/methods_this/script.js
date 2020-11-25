"use strict"
let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function () {
    console.log("Привет!");
};
// эти объекты делают одно и то же (одинаковые методы)
let user1 = {
    sayHi: function () {
        console.log("Привет!!");
    }
};

// сокращённая запись выглядит лучше, не так ли?
let user2 = {
    sayHi() { // то же самое, что и "sayHi: function()"
        console.log("Привет!!!");
    }
};

let user3 = {
    name: "Джон",
    age: 30,

    sayHi() {
        // this - это "текущий объект"
        console.log(this.name);
    }

};

user3.sayHi(); // Джон

let user4 = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
    console.log(this.name);
}

// используем одну и ту же функцию в двух объектах
user4.f = sayHi;
admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user4.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// this без объекта в строгом режиме возвращает undefined
function sayHi2() {
    console.log(this);
}

sayHi2(); // undefined

user.sayHi(); // Привет!

user1.sayHi();

user2.sayHi();

user3.sayHi();