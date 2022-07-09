// NORMAL level
// Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

  const user = {
    name: 'Katya',
    age: 30
  }

  console.log(user.name, user.age);

  delete user.name, delete user.age;

  console.log(user.name, user.age);

// Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, 
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

  const cat = {
    name: 'Vasya',
    age: 2
  }

  console.log('name' in cat);
  console.log('age' in cat);

// Task 3 🖥
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
        console.log (key);
        console.log (student [key]);
      }


// Task 4 🖥
// Дан обьект:

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// Вывести в консоль слово красный и синий

const colors = {
      'ru pum pu ru rum': {
          red: 'красный',
          green: 'зеленый',
          blue: 'синий'
      },
  };

  console.log(colors['ru pum pu ru rum'].red);
  console.log(colors['ru pum pu ru rum'].blue);

// Task 5 🖥
// Дан обьект:

//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         maxim: 664,
//         alexandra: 199
//     }
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  maxim: 664,
  alexandra: 199,
};
let sumSalary = 0;
let worker = 0;
let averageSalary = 0;
for (let key in salaries) {
  worker++;
  sumSalary += salaries[key];
}

averageSalary = sumSalary / worker;

console.log(averageSalary);

// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации.
//  Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. 
// Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

const login = prompt('enter your login:');
const password = prompt('enter your password:');
const person = {};
person.login = login;
person.password = password;
const validator = (checkLogin, checkPassword) => {
  if (checkLogin === person.login && checkPassword === person.password) {
    return console.log('Welcome!');
  }
};
validator(prompt('enter Login:'), prompt('enter Password:'));

