// Создание объекта

let user1 = new Object(); // синтаксис конструктор объекта 
let user2 = {}; // синтаксис литерал объекта - более предпочтительный

// Литералы и свойства

let user3 = {
    name: "John", // ключ - свойство "name" значение "John"
    age: 30
};

// Проверка существования свойства и его удаление

if (user1.name)
    delete user1.name;

// Имена свойств из нескольких слов

let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };

// Доступ к именам свойств из нескольких слов

user4["likes birds"] = true; // user4.propertyName - такой способ не сработает

let propertyName = "likes birds";
user4.propertyName = true; // НЕ СРАБОТАЕТ !!!

// Вычисляемые свойства

let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert( bag.apple ); // 5, если fruit="apple"

// Свойство из переменной

function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  let user = makeUser("John", 30);
  alert(user.name); // John
// тоже самое что и:
function makeUser(name, age) {
    return {
      name, // то же самое, что и name: name
      age   // то же самое, что и age: age
      // ...
    };
  }

  

  