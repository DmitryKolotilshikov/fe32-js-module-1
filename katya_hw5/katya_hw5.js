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
          alexandra: 199
      }

  function averageSalary (salaries) {
    let size = Object.keys(salaries).length;
    let sum = 0;
    for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum / size ;
  }

  console.log(averageSalary(salaries) )


// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

// ADVANCED level
// Task 1 👨‍🏫
// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

// Task 2 🖥
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// Task 3 🖥
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//    dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }