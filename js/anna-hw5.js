/* Task 1 💻
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. */

const phone = {
    brand: "Iphone",
    color: "black"
}

delete phone.brand;
delete phone.color;
console.log("color" in phone);


/* Task 2 🖥
Создать любой обьект с двумя ключами и любыми значениями в них, 
а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true */

const cart = {
    shampoo: 2,
    conditioner: 1
}

const isEmpty = (obj) => {
    for (const key in obj) {
        return true;
    }
    return false;
}

console.log(isEmpty(cart));


/* Task 3 🖥
Дан обьект:
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта. */

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (const key in student) {
    console.log(key);
    console.log(student[key]);
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

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);


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

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
}

const countAverageSalary = (obj) => {
    let res = 0;
    let employees = 0;
    let sum = 0;
    for (const key in obj) {
        employees++
        sum += obj[key];
        res = sum / employees;
    }
    return res;
}
console.log(countAverageSalary(salaries));


/* Task 6 🖥
Создать валидатор, запросить у пользователя логин и пароль для регистрации.
Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. 
Если верно введен логин и пароль, вывести сообщение Добро пожалоВать. */

const login = prompt("Enter your login");
const password = prompt("Enter your password");

const userData = {
    login: login,
    password: password
}

console.log(userData);

const confirm = (confirmLogin, confirmPassword) => {
    if (confirmLogin === login && confirmPassword === password) {
    }
    return console.log("Добро пожаловать");
}

confirm(prompt("Enter your login again"), prompt("Enter your password again"));

