//заданииз учебника 4.1
//задача 1
let user = {
    name: "John",
    surname: "Smith",
}
user.name = "Pete";
delete user.name;

//задача 2
const schedule = {};
function isEmpty(schedule) {
    for (let key in schedule) {
        return false;
    }
    return true;
}
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

//задача 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

//задача 4 
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}
function multiplyNumber(menu) {
    for (let width in menu) {
        if (typeof menu[width] == 'number') {
            menu[width] *= 2;
        }
        return width;
    }
    for (let height in menu) {
        if (typeof menu[height] == 'number') {
            menu[height] *= 2;
        }
        return height;
    }
    for (let title in menu) {
        if (typeof menu[title] == 'number') {
            menu[title] *= 2;
        }
        return title;
    }
}
console.log(menu.height, menu.title, menu.width);
//выводит те же значения, не понимаю, что делаю не так

//HW5
//task 1
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
const userInfo = {
    dateOfBirth: prompt("Когда вы родились?", ''),
    favoriteMusic: prompt("Какую музыку вы слушаете?", '',)
};
delete userInfo.dateOfBirth;
delete userInfo.favoriteMusic;
console.log(userInfo);

//task 2
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true
const favoriteBook = {
    bookTitle: prompt('Введите название вашей любимой книги', ''),
    authorName: prompt('Введите имя автора?', ''),
}
let result1 = favoriteBook.hasOwnProperty('bookTitle');
let result2 = favoriteBook.hasOwnProperty('authorName');
console.log(result1, result2);

//task 3
//Дан обьект. C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const prop in student) {
    console.log("student" + prop + "=" + student[prop]);
}

//task 4
// Дан обьект. Вывести в консоль слово красный и синий
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue);

//task 5
//Дан обьект. Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
const allSalaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
}
function  average(arr)
{
    if(arr.length === 0)
        return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
let k = [500, 413, 987, 664, 199];
console.log(average(k));

//task 6
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.
const userLogin = prompt ('Введите ваш логин', '');
const userPassword = prompt ('Введите ваш пароль', '');
const checkName = prompt ('Подтвердите ваш логин', '');
const checkPassword = prompt ('Подтвердите ваш пароль', '');
if (userLogin === checkName && userPassword === checkPassword) {
    alert ('Добро пожаловать!');
} else {
    alert ('Неверные имя пользователя и/или пароль');
}