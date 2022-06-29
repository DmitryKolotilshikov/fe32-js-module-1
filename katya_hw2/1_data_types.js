// переменные

// const name = 'Dmitry';
// let surname = 'Ko';
// var age = 31; 

// console.log('My name: ', name, 'My Surname: ', surname, 'My age: ', age);
// address = 'Minsk';
// let address;
// console.log(address);

// const userName = 'Mister Anderson';  // camel case
// const PI = 3.14; // only uppercase

// let userSurname = 'Anderson';
// userSurname = 'Mr.Anderson';

// alert, prompt, confirm  - Browser functions

// const myAge = prompt('Enter your age');
// console.log('Мой возраст: ', myAge);


// типы данные (в JavaScript существует 8 типов данных)

const myName = 'Neo'; // string
const myAge = 31; // number
let isTrue = true; // boolean true or false
const notValue = undefined; // undefined  - неопределенный
const _null = null; // null - отсутствие всего 
const obj = {
    name: 'Dmitry',
    age: 32,
    description: 'lorem ipsum'
}; // object
const _Symbol = Symbol('id'); // Symbol
const _bigInt = BigInt('100000000000000000000000000000000000000000000'); // BigInt

/* console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isTrue);
console.log(typeof notValue);
console.log(typeof _null);
console.log(typeof obj);
console.log(typeof _Symbol);
console.log(typeof _bigInt); */    // shift + alt + a

// let text;
// console.log(text); // expect undefined

// console.log(obj.name, obj.age);


// Мутации 

// const num = 42;
// const str = '09';
// const numStr = num + str;

// console.log(typeof numStr);

let num_1 = 42;
let str_to_num = '9.5';
// let sum_num_str = +str_to_num + 42; // +
// let sum_num_str = Number(str_to_num) + 42; // Number()
// let sum_num_str = parseInt(str_to_num) + 42; // parseInt(), 
// let sum_num_str = parseFloat(str_to_num) + 42; // parseFloat()

// let numToString = '' + num_1; // '' + value
// let numToString = String(num_1); // String()
// let numToString = `${num_1}`; // `${}`
// let numToString = num_1.toString(); // value.toString()

// console.log(typeof numToString);

// let isNumber = 42;

// console.log(Boolean(isNumber)); // to boolean
// console.log(!!isNumber); // to boolean

// falsy значения

// операторы

//  +, -, /, *, %, **

let num1 = 9;
let num2 = 3; 
// num1 = num1 + num2;    -----  num1 += num2 
// num1 = num1 - num2;    -----  num1 -= num2
// num1 = num1 * num2;    -----  num1 *= num2
// num1 = num1 / num2;    -----  num1 /= num2

// let result1 = num1 % num2; // остаток от деления
// let result1 = num1 ** num2; // возведение в степень

// ++num1
// --num1
// num1++
// num1--