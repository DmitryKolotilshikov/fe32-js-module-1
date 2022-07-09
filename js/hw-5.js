"use strict"

// NORMAL level

/*Task 1 💻
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.*/

const cup = {
   color: 'violet',
   volume: '350 ml',
}

delete cup.volume;


/* Task 2 🖥
Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ 
и если есть вывести в консоль true */

const phone = {
   mark: 'Apple',
   model: '12Pro',
}

if ('mark' in phone) {
   console.log ('true');
} else {
   console.log('False');
}

/* Task 3 🖥
Дан обьект:

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.*/

const student = {
   name: 'John',
   age: 19,
   isHappy: true
}

for (let key in student) {
   console.log (key);
}

for (let key in student) {
   console.log (`${key}:${student[key]}`);
}

/* Task 4 🖥
Дан обьект:

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
Вывести в консоль слово красный и синий */

const colors = {
   'ru pum pu ru rum': {
       red: 'красный',
       green: 'зеленый',
       blue: 'синий'
   },
};

console.log (colors['ru pum pu ru rum'].red);
console.log (colors['ru pum pu ru rum'].blue);

/* Task 5 🖥
Дан обьект:

    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        maxim: 664,
        alexandra: 199
    }
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */

const salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   maxim: 664,
   alexandra: 199
};

let persons = 0;
let sumSalary = 0;
let averageSaleary = 0;

for (let key in salaries) {
   persons++;
   sumSalary += salaries[key];
   averageSalary = sumSalary / persons;
}

console.log(averageSalary);

/* Task 6 🖥
Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать. */

const login = prompt('Введите логин');
const password = prompt('Введите пароль');

const user = {
   login,
   password,
}

const loginConfirmation = prompt('Подтвердите логин');
const passwordConfirmation = prompt('Подтвердите пароль');

if ((loginConfirmation === user.login) && (passwordConfirmation === user.password)) {
   alert('Добро пожалоВать');
} else {
   alert('Проверьте логин и/или пароль');
}

// ADVANCED level

/* Task 1 👨‍🏫
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. */

const numbers = {
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

function getGameScore (oneNumber, twoNumer) {
   let a
   let b

   for (const key in numbers) {
      if (oneNumber == key) {
         a = numbers[key]
      }
      if (twoNumer == key) {
         b = numbers[key];
      }
   }
   return (`${a} : ${b}`)
}

getGameScore(3, 5);

/* Task 2 🖥
Даны два одинаковых обьекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    } */

   const student1 = {
      name: 'Polina',
      age: 27,
   }

   const student2 = {
      name: 'Polina',
      age: 27,
   }

   const student1 = student2;
   console.log (student1 == student2);

/* Task 3 🖥
У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
Но произошла ошибка и в этом обьекте нету птицы. 
Если попробуем узнать имя мы получим ОШИБКУ. 
Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
} */

// Опциональная цепочка '?.'

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
};

console.log(animals.bird?.name);
