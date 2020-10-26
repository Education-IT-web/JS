// 1 

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2

function isEmpty(object) {
    let propertiesCount = 0;
    for (key in object)
        return false;
    return true;
}

console.log(isEmpty({ name: "Ulianna" }));

// 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (key in salaries)
    sum += salaries[key];
console.log(sum)

// 4

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }