/*
  TASK 1
  Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
*/

console.log('TASK 1');

const personTask1 = {
  name: 'Bob',
  age: 28
};

console.log(`Before deletting keys: `, personTask1);

delete personTask1.name;
delete personTask1.age;

console.log(`After deletting keys: `, personTask1);

/*
  ==================================
*/


/*
  TASK 2
  Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true
*/

console.log('TASK 2');

const personTask2 = {
  name: 'Bob',
  age: 28
};

console.log('Name key exists in object personTask2:', 'name' in personTask2);
console.log('Height key exists in object personTask2:', 'height' in personTask2);

/*
  ==================================
*/


/*
  TASK 3
  Дан обьект:

    const student = {
      name: 'John',
      age: 19,
      isHappy: true
    }
  C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.
*/

console.log('TASK 3');

const student = {
  name: 'John',
  age: 19,
  isHappy: true
};

for (let key in student) {
  console.log ('Key in student:' ,key, ', has value:', student[key]);
}

/*
  ==================================
*/


/*
  TASK 4
  Дан обьект:

    const colors = {
      'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
      },
    };
  Вывести в консоль слово красный и синий
*/

console.log('TASK 4');

const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  },
};

console.log(colors["ru pum pu ru rum"].red, ',', colors["ru pum pu ru rum"].blue);

/*
  ==================================
*/


/*
  TASK 5
  Дан обьект:

    let salaries = {
      andrey: 500,
      sveta: 413,
      anton: 987,
      maxim: 664,
      alexandra: 199
    }
  Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
*/

console.log('TASK 5');

const salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  maxim: 664,
  alexandra: 199
};

const averageSalary = () => {
  const sumWorkers = Object.keys(salaries).length;
  let sum = 0;
  for(let key in salaries) {
    sum += salaries[key];
  }

  return sum / sumWorkers;
};

console.log(averageSalary());

/*
  ==================================
*/


/*
  TASK 6
  Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
  Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль,
  вывести сообщение Добро пожалоВать.
*/

console.log('TASK 6');

const userLogin = {
  name: prompt('Enter user name:'),
  password: prompt('Enter password:'),
};

const userLoginConfirm = {
  name: prompt('Confirm user name:'),
  password: prompt('Confirm password:'),
};

const validation = (userLogin.name === userLoginConfirm.name && userLogin.password === userLoginConfirm.password);

if(validation) {
  alert('Добро пожалоВать');
} else {
  alert('Попробуйте еще раз');
}

/*
  ==================================
*/


/*
  ADVANCED TASK 1
  Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
  Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
  Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.
*/

console.log('ADVANCED TASK 1');

const score = {
  redTeam: 6,
  blueTeam: 4
};

const redTeamScore = score.redTeam;
const blueTeamScore = score.blueTeam;

console.log(`${redTeamScore} : ${blueTeamScore}`);

const changeScoreFormat = (a) => {

  switch (a) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return "It's can't be!"
  }
};

console.log(`${changeScoreFormat(redTeamScore)} : ${changeScoreFormat(blueTeamScore)}`);

/*
  ==================================
*/


/*
  ADVANCED TASK 2
  Даны два одинаковых обьекта. Сравните их так чтобы они были равны

  let student1 = {
    name: 'Polina',
    age: 27,
  }

  let student2 = {
    name: 'Polina',
    age: 27,
  }
*/

console.log('ADVANCED TASK 2');

const student1 = {
  name: 'Polina',
  age: 27
};

const student2 = {
  name: 'Polina',
  age: 27
};

console.log('Just comparing: ', student1 === student2);

const objEqualyty = (obj1, obj2) => {
  for(let key in obj1) {
    if(obj1[key] === obj2[key]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log('By for...in: ', objEqualyty(student1, student2));

console.log('By JSON stringlify: ', JSON.stringify(student1) === JSON.stringify(student2));

/*
  ==================================
*/


/*
  ADVANCED TASK 3
  У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль.
  Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ.
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
  }
*/

console.log('ADVANCED TASK 3');

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

console.log(animals.bird?.name, "Correct");

/*
  ==================================
*/