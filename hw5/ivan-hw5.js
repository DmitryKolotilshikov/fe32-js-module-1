'use strict'

// Task 1
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const obj = {
    name: "Ivan",
    age: 25,
}

delete obj.name;
delete obj.age;

console.log(obj);


// Task 2
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

const obj = {
    name: "Ivan",
    age: 25,
}

console.log ('name' in obj);


// Task 3
// Дан обьект:

//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {

    console.log(key);

    console.log(student[key]);
}


const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)


/* Task 5
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199,
  };
  let sum = 0;
  let amount = 0;
  let average= 0;
  for (let key in salaries) {
    amount++;
    sum += salaries[key];
    average = sum / amount;
  }
  console.log(average);


// Task 6
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.


const userLogin = prompt('Введите ваш логин');
const userPassword = prompt('Введите ваш пароль');

const profile = {
    login: 'ivan',
    password: '123',
}

function validateUser (userLogin, userPassword, profile) {
    if (profile.login === userLogin && profile.password === userPassword) 
    alert('Добро пожаловать!');
    else 
    alert ('Введен неверный логиг или пароль')
    ;
}

validateUser (userLogin, userPassword, profile);
