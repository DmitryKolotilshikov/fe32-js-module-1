
// Task 1 

//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const user = {
    city: 'Nesvizh',
    number: 30000,
};
delete user.city;
console.log (user);

// Task 2 

//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const data = {city: 'Nesvizh', number: 30000,};
console.log('number' in data); 
console.log('Minsk' in data); 


/// Task 3 

//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.



    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    };
    for (const key in student){
        console.log(key);
        console.log(student[key]);
    }

    
    // Task 4 

    //Вывести в консоль слово красный и синий


const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);



//Task 5 desktop_computer
//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  maxim: 664,
  alexandra: 199
}

let sumSalaries = 0
for (const key in salaries) {
  sumSalaries += salaries[key];
}
console.log(sumSalaries)


// Task 6 
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 


const Name = prompt('Введите Ваш логин');
const Password = prompt('Введите Ваш пароль');
const userName = prompt ('Подтвердите Ваш логин');
const userPassword = prompt ('Подтвердите Ваш пороль');
if ((Name === userName) && (Password === userPassword)) {
  console.log('Добро пожалоВать!');
} else {
  console.log('Неверно введен логин или пароль!');
}



        
    

