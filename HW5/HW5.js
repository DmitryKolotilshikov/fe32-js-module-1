//HW-5
//Task-1
let user = {
    name: "Tim",
    age: "20",
}

for(const key in user) {
    console.log(`User ${key} is ${user[key]}`);
}

for(const key in user) {
    console.log(`Key ${key} was deleted`);
    delete user[key];
}

//Task-2
const dish = {
    name: "Pasta",
    isYummy: true,
    isExpensive: false,
}

const isKeyExists = (key, object) => {
    if(key in object) {
        return true;
    }
    
    return false;
}

console.log(isKeyExists("name", dish));
console.log(isKeyExists("cheese", dish));
console.log(isKeyExists("isYummy", dish));

//Task-3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for(const key in student) {
    console.log(`Student[${key}] = ${student[key]}`);
}

//Task-4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

const redColor = colors["ru pum pu ru rum"].red;
const blueColor = colors["ru pum pu ru rum"].blue;

console.log(redColor);
console.log(blueColor);

//Task-5
const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
}

const calculateAvgSalary = (object) => {
    let totalSalary = 0;

    for(const key in object){
        totalSalary += object[key];
    }

    return totalSalary / Object.keys(object).length;
}

console.log(calculateAvgSalary(salaries));

//Task-6
const userIsValid = () => {
    const login = prompt("Enter your login");
    const password = prompt("Enter your password");

    const userModel = { login, password}

    const checkLogin = prompt("Enter your login again");
    const checkPassword = prompt("Enter your password again");

    const userModelChecked = { checkLogin, checkPassword}

    const isLoginValid = (userModel.login === userModelChecked.checkLogin);
    const isPasswordValid = (userModel.password === userModelChecked.checkPassword);

    if (isLoginValid && isPasswordValid){
        return "Welcome!";
    }

    return "Access denied";
}

console.log(userIsValid()); 