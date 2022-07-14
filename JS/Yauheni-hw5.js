
// # HOMEWORK 5
// ## NORMAL level
// ### Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const newObject = {
    age: 32
    user: 'Yauhen'
}
console.log(newObject)

delete newObject.age
delete newObject.user

console.log(newObject)


// #### Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const newObject = {
    age: 32,
    user: 'Yauhen'
  }
  console.log('age' in newObject)        //true
  console.log('status' in newObject)     //false


// #### Task 3 🖥
// Дан обьект:
// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.


    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
for (const key in student) {
    console.log(key)
}

for (const key in student) {
    console.log(`${key}, : ${student[key]}`)
}


// #### Task 4 🖥
// Дан обьект:
// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```
// Вывести в консоль слово красный и синий


const colors = {
    'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
    },
  };
  console.log(colors['ru pum pu ru rum'].red)
  console.log(colors['ru pum pu ru rum'].blue)


// #### Task 5 🖥
// Дан обьект:
// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         maxim: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
  }
  
  let sumSalary = 0
  for (const key in salaries) {
    sumSalary += salaries[key]
  
  }
  const averageSalary = sum / 5;
  console.log('Средняя зарплата сотрудников:', averageSalary);


// #### Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

const userName = prompt('Ваш логин');
const userPassword = prompt('Ваш пароль');
const UserObject = {
  userName,
  userPassword
}
const userNameControl = prompt('Подтвердите Ваш логин');
const userPasswordControl = prompt('Подтвердите Ваш пароль');
if ((userNameControl === UserObject.userName) && (userPasswordControl === UserObject.userPassword)) {
    alert('Добро пожаловать!')

} else {
    alert('Неправильный логин или пороль')
}