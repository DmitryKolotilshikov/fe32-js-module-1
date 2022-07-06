'use strict';

//Task 1
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const obj = {
  name: 'Task1',
  age: 4,
};
delete obj.name;
delete obj.age;

//====================================================================================================================

//Task 2
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

const task2 = {
  name: 'Anton',
  age: 26,
};
for (let key in task2) {
  if (key === 'name') {
    console.log(true);
  }
}

//====================================================================================================================

//Task3
//Дан обьект:
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
//C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
  name: 'John',
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(`Ключ:${key} Значение: ${student[key]}`);
}

//====================================================================================================================

//Task 4
//Вывести в консоль слово красный и синий

const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий',
  },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//====================================================================================================================

//Task5
//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  maxim: 664,
  alexandra: 199,
};
let sumSalary = 0;
let staff = 0;
let averageSalary = 0;
for (let key in salaries) {
  staff++;
  sumSalary += salaries[key];
  averageSalary = sumSalary / staff;
}
console.log(averageSalary);

//====================================================================================================================

//Task 6 🖥
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

const login = prompt('enter login:');
const password = prompt('enter password:');
const person = {};
person.login = login;
person.password = password;
const validator = (checkLogin, checkPassword) => {
  if (checkLogin === person.login && checkPassword === person.password) {
    return console.log('Добро пожаловать!');
  }
};
validator(prompt('enter Login:'), prompt('enter Password:'));

//====================================================================================================================

//ADVANCED level
//Task 1
//Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

const footballTable = {
  0: 'ноль',
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
};
const swapTable = (a, b) => {
  if (a in footballTable && b in footballTable) {
    return footballTable[a] + ':' + footballTable[b];
  }
};
console.log(swapTable('4', '8'));

//====================================================================================================================

//Task 2 🖥
//Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
  name: 'Polina',
  age: 27,
};

let student2 = {
  name: 'Polina',
  age: 27,
};

const compareObj = (a, b) => {
  for (let key in a) {
    if (a[key] === b[key]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(compareObj(student1, student2));

console.log(JSON.stringify(student1) === JSON.stringify(student2));

//====================================================================================================================

//Task3
//У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
  cat: {
    name: 'Енчик',
    age: 3,
  },
  dog: {
    name: 'Орео',
    age: 2,
  },
};
console.log(animals.bird?.name);
