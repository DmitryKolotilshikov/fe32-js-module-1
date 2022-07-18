'use strict';

// Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const cat = {
	breed: 'pooch',
	userName: 'Kuzya'
}
console.log(cat);
delete cat.userName;
delete cat.breed;
console.log(cat);

// Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

const dog = {
	userName: 'Jack',
	age: 3,
}
console.log("age" in dog);
console.log("name" in dog);

// Task 3 🖥
// Дан обьект:
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
	name: 'John',
	age: 19,
	isHappy: true
};

for (const key in student){
	console.log(key);
	console.log(student[key]);
	// console.log(key, student[key]);
}

// Task 4 🖥
// Дан обьект:
// Вывести в консоль слово красный и синий

const colors = {
	'ru pum pu ru rum': {
		 red: 'красный',
		 green: 'зеленый',
		 blue: 'синий'
	},
};
console.log(colors['ru pum pu ru rum'].red, 'и', colors['ru pum pu ru rum'].blue);

// Task 5 🖥
// Дан обьект:
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

const salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	maxim: 664,
	alexandra: 199
};
let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}
const averageSalary = sum / 5;
console.log('Средняя зарплата сотрудников:', averageSalary);

// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

const login = prompt('Введите ваш логин');
const password = prompt('Введите ваш пароль');
const objectUser = {login, password};

const validator = (checkLogin, checkPassword) => {
	if (checkLogin === objectUser.login && checkPassword === objectUser.password) {
	  console.log('Добро пожаловать!');
	  alert('Добро пожаловать!');
	}
	else { console.log('Попробуйте еше раз!');
			 alert('Попробуйте еше раз!');}
 };
 validator(prompt('Подтвердите ваш логин:'), prompt('Подтвердите ваш пароль:'));

// ADVANCED level

// Task 1 👨‍🏫
// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

// Task 2 🖥
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

const student1 = {
    name: 'Polina',
    age: 27,
};

const student2 = {
    name: 'Polina',
    age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));
