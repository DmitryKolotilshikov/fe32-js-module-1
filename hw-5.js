/* Task 1 computer
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. */
const myObject = {
  age: 18,
  user: 'Evgen'
}
console.log(myObject)
delete myObject.age
delete myObject.user
console.log(myObject)


/* Task 2 desktop_computer
Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true */
const myObject = {
  age: 18,
  user: 'Evgen'
}
console.log('age' in myObject) //true
console.log('status' in myObject) //false


/* Task 3 desktop_computer
C помощью циклаfor in вывести в консоль сначала все ключи, потом значения ключей обьекта. */
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


/* Task 4 desktop_computer
Вывести в консоль слово красный и синий */
const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  },
};
console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)


/* Task 5 desktop_computer
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */
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
console.log(sumSalary)


/* Task 6 desktop_computer
Создать валидатор, запросить у пользователя логин и пароль для регистрации.Затем данные записать в обьект.Потом попросить пользователя подтвердить данные.Если верно введен логин и пароль, вывести сообщение Добро пожалоВать. */
const userName = prompt('Введите Ваш логин к доступу сайта');
const userPassword = prompt('Введите Ваш пароль к доступу сайта');
const aviorizationUserObject = {
  userName,
  userPassword
}
const userNameControl = prompt('Подтвердите Ваш логин к доступу сайта');
const userPasswordControl = prompt('Подтвердите Ваш пароль к доступу сайта');
if ((userNameControl === aviorizationUserObject.userName) && (userPasswordControl === aviorizationUserObject.userPassword)) {
  alert('Добро пожалоВать!')
} else {
  alert('Неверно введен логин или пароль!')
}



// ADVANCED level
/* Task 1 man_teacher
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. */
const footTable = {
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

function getStringofNomber(oneTeamScore, twoTeamScore) {
  let oneTeamScoreString
  let twoTeamScoreString
  for (const key in footTable) {
    if (oneTeamScore == key) {
      oneTeamScoreString = footTable[key]
    }
    if (twoTeamScore == key) {
      twoTeamScoreString = footTable[key]
    }
  }
  return (`${oneTeamScoreString} : ${twoTeamScoreString}`)
}


/* Task 2 desktop_computer
Даны два одинаковых обьекта.Сравните их так чтобы они были равны */
const student1 = {
  name: 'Polina',
  age: 27,
}

const student2 = {
  name: 'Polina',
  age: 27,
}
console.log(student1 === student2);
student1 = student2;
console.log(student1 === student2)


/* Task 3 desktop_computer
У нас есть обьект с животными.Наша задача узнать имя птицы и вывести его в консоль.Но произошла ошибка и в этом обьекте нету птицы.Если попробуем узнать имя мы получим ОШИБКУ.Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше. */
const animals = {
  cat: {
    name: 'Енчик',
    age: 3,
  },
  dog: {
    name: 'Орео',
    age: 2,
  }
}

console.log("animals.bird?.name")