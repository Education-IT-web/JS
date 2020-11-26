"use strict"
function User(name) { // Создание класса User
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася"); // создание экземпляра класса User
  
  alert(user.name); // Вася
  alert(user.isAdmin); // false

  // То же самое но с использованием литерала объекта
  
let user = {
    name: "Вася",
    isAdmin: false
  };

  function User1(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "Меня зовут: " + this.name );
    };
  }