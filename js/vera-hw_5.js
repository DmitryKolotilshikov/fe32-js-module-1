// Task 1
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const breed = 'Maine Coon';
const age = '3';

const passport = {
    species: 'cat',
    name: 'Thomas',
    breed,
    ['date of birth']: '08.12.2019',
    age,
    wool: 'red-white',
}
console.log(passport);

delete passport.breed,
    delete passport.age;
console.log(passport);


// Task 2 
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

const color = 'silver';
const model = '5s';

const phone = {
    series: 'iphone',
    model,
    color,
    capacity: '16GB',
    processor: 'M7',
}
console.log(phone);

console.log('color' in phone);
console.log('model' in phone);


// Task 3 
// Дан обьект.
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};
for (let key in student) {
    console.log(key);
    console.log(student[key]);
};


// Task 4 
// Дан обьект.
// Вывести в консоль слово красный и синий.

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);


// Task 5 
// Дан обьект.
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
}

let getSum = 0;
let totalSum = 0;
let semployees = 0;

for (let key in salaries) {
    semployees++;
    totalSum += salaries[key];
    getSum = totalSum / semployees;
}
console.log(getSum);


//Task 6
// Создать валидатор, запросить у пользователя логин и пароль для регистрации.Затем данные записать в обьект.Потом попросить пользователя подтвердить данные.Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.


