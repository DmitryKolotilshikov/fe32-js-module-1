'use strict';

// 1. Numbers

// userName = 'Neo';     // Здесь будет ошибка
// console.log(`Hello ${userName}`);

// const int = 50; // integer
// const floatInt = 50.6666666;  // float

// console.log(50 / 0); 
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(10));

// console.log(floatInt.toFixed(2));

// Math

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.max(1, 2, 3, 4, 5), Math.min(1, 2, 3, 4, 5));
// console.log(Math.sqrt(25), Math.pow(5, 3));
// console.log(Math.round(42.42), Math.floor(42.42), Math.ceil(42.42), Math.trunc(42.42),  Math.abs(-42));

// const random = Math.random() * 10;
// console.log(random.toFixed(2));
// console.log(Math.trunc(random));
// console.log(Math.trunc(Math.random() * 10));

// =================================================================

// 2 String

// const userName = 'Dmitry';

// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// console.log(userName[0]);
// console.log(userName.charAt(0));

// console.log(userName.slice(0,3)); // от 0 (включая 0) до 3 (не включая 3)
// console.log(userName.indexOf('D'));
// console.log(userName.lastIndexOf('D'));

// console.log(userName.startsWith('d')); // return true or false
// console.log(userName.toLowerCase().startsWith('d')); // return true or false
// console.log(userName.endsWith('y')); // return true or false

// console.log(userName.repeat(3));
// console.log(userName[0].repeat(3));

// const str = '    Hello World      ';
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// =================================================================

// 3. Сonditional statements - Условные операторы

// Falsy values: false, 0, -0, NaN, '', null, undefined

// > < >= <=       a > b;  a < b; a >= b; a <= b;  // чтобы получить булевые значения

// == !=        a == b; a != b;       // чтобы получить булевые значения
// === !==        a === b; a !== b;   // чтобы получить булевые значения
// const a = 3;
// const b = '3';

// console.log(a == b);  // == сравнивает с приведением типов | сравнивает по значению
// console.log(a === b); //  === сравнивает без приведения типов | сравнивает и по типу и по значению 

// && ||    // && (и)   || (или)
// !
// ?? (оператор объединения с null/undefined)

// if (1 > 0) {
//     console.log('Правда!');
// } else {
//     console.log('Ложь!');
// }

// const year = 2300;
// const age = '';   // falsy value

// if (year !== 1900) {
//     console.log('1900!');
// } else if (year === 2300) {
//     console.log('2300!');
// } else {
//     console.log('Всё остальное!');
// }

// if (year && age) {
//     console.log('true!');
// } else {
//     console.log('false!');
// }

// if (age || year) {
//     console.log('true!');
// } else {
//     console.log('false!');
// }

// console.log(Boolean(!age)); // ! - инверсия

// const YEAR = 2022;

// switch(YEAR) {
//     case 1900:
//         console.log('Год 1990');
//         break;
//     case 2022:
//         console.log('Год 2022');
//         break;
//     case 2300:
//         console.log('Год 2300');
//         break;
//     default:
//         console.log('Год неизвестный');
//         break;
// }

// =====================================================================

// Циклы

// let someNumber = 0;

// while(someNumber < 10) {   // пока состояние в скобках true, то цикл повторяется
//     console.log(someNumber);
//     someNumber++;
// }

// let num1 = 0;
// let num2 = 5;

// while(num1 !== num2) {
//     console.log('num1: ', num1, 'num2: ', num2);
//     num1++;
// }
// console.log(num1);

// for(let i = 0; i < 10; i++) {   // while (i < 10) { ... }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log(i);
//         break;
//     }
// }

// for(let i = 0; i < 10; i++) {
//     if (i === 5 || i === 6 || i === 7) {
//         continue;
//     }
//     console.log(i);
// }
