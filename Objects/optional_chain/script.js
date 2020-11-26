"use strict"
let user = {}; // пользователь без адреса

alert(user?.address?.street); // undefined (без ошибки)
// Чтение адреса с помощью конструкции user?.address выполняется без ошибок, даже если объекта user не существует:

let user = null;

alert(user?.address); // undefined
alert(user?.address.street); // undefined
let user1 = {
    admin() {
        console.log("Я администратор");
    }
}

let user2 = {};

user1.admin?.(); // Я администратор
user2.admin?.();