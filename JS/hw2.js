// Task 1 💻
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

const x = 20;
const y = 58;
const z = 42;

const sumXYZ = x + y + z;

console.log('Cумма =', sumXYZ );

// Task 2 💻
// Создайте переменные, посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

const secInMin = 60;
const minInHr = 60;
const hrInDay = 24;
const dayInYr = 365;
const myAge = 34;

const myAgeInSeconds = myAge * dayInYr * hrInDay * minInHr * secInMin;

console.log('Мой возраст в секундах =', myAgeInSeconds );

// Task 3 💻
// Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = '42';

let countInStr = '' + count;
let userNameInNum = +userName;

console.log( countInStr, userNameInNum );

let countInStr_2 = String(count);
let userNameInNum_2 = Number(userName);

console.log( countInStr_2, userNameInNum_2 );

// Task 4 💻
// Имеется три переменные, cложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.

let a = 1;
let b = 2;
let c = "белых медведей";

let res_a_b_c = String(a) + String(b)+' ' + c;

console.log( res_a_b_c );

// Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

const word1 = 'доступ';
const word2 = 'морпех';
const word3 = 'наледь';
const word4 = 'попрек';
const word5 = 'рубило';

const lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log('Длина всех слов равна', lengthWords );

// Task 6 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
// `Variable: %variable name% have type: %type variable%`

const name = 'Leonid';
const age = 34;
const bool = true;

console.log('Variable:', name, 'have type:', typeof(name));
console.log('Variable:', age, 'have type:', typeof(age));
console.log('Variable:', bool, 'have type:', typeof(bool));

// Task 7 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

const you_name = prompt('Please enter your name:');
const you_age = prompt('How old are you?');

console.log('Имя:', you_name);
console.log('Возраст:', you_age);


// ADVANCED level
// Task 1 👨‍🏫
// Поменяйте значение переменных местами не создавая дополнительной переменной:

let a1 = 4;
let b1 = 3;

console.log( a1, b1 );

[a1, b1] = [b1 ,a1];

console.log( a1, b1 );


// let a2 = 4;
// let b2 = 3;

// a2 = a2 + b2; // a2=7
// b2 = a2 - b2; // b2=4
// a2 = a2 - b2; // a2 = 3

// console.log(a2,b2);

// Task 2 👨‍🏫
// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную cipher и поместите туда необходимые символы


let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.slice(1,2) + codeWord2.slice(1,2) + codeWord3.slice(1,2) + codeWord4.slice(1,2) + codeWord5.slice(1,2);

console.log( cipher );