"use strict"
let id = Symbol(); // Создание переменной с типом данных Symbol
console.log(id);

let id1 = Symbol("id1"); // Создание переменной с описанием (description)
console.log(id1.description);

let id2 = Symbol();
let id3 = Symbol();

console.log(id2 == id3); // Сравнение двух переменных - символов

let user = {
    name: "Вася",
    age: 26
};
// Добавление в объект свойства типа Symbol
user.id1 = 1; 
console.log(user.id1); // user[id1] - такой вызов не сработает

user[id2] = 1;
console.log(user[id2]); // user.id2 - такой вызов не сработает

let id11 = Symbol();

let user1 = {
    name: "Вася",
    age: 30,
    [id]: 128 // Просто "id: 128" не сработает
}
