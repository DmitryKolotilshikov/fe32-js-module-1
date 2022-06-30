/* Task 1 💻
Создайте переменные, затем сложите их и выведите результат в консоль разработчика. */

const x = 20
const y = 58
const z = 42

console.log(x+y+z);


/* Task 2 💻
Создайте переменные и Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds */

const numSec = 60;
const numMin = 60;
const numHour = 24;
const numDays = 365;

const myAgeInSeconds = console.log(29 * numDays * numHour * numMin * numSec);



/* Task 3 💻
Создайте две переменные. 
Поместите в них переменную count и превратите в строку, а userName наоборот в число.
Попробуйте реализовать задачу двумя разными способами. */

const count = 42
const userName = '42'

// 1 способ число к строке
const num_to_str = "" + count;

// 2 способ число к строке
const num_to_str2 = String(count);

// 1 способ строку в число
const str_to_num = Number(userName);

// 2 способ строку в число
const str_to_num2 = parseInt(userName);


/* 
Task 4 💻
Имеется три переменные: 
Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль. */

const a = 1
const b = 2
const c = "белых медведей"

const sumABC = "" + a + "" + b + c;
console.log(sumABC);


/* Task 5 💻
Создайте переменные и поместите в них нижеприведенные слова. 
Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка: */

const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубило";

const lengthWords = word1 + word2 + word3 + word4 + word5; 

console.log(lengthWords.length);


/* Task 6 💻
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида: */
// `Variable: %variable name% have type: %type variable%`

const string = 'Anna';
const number = 29;
let isTrue = true;

console.log('Variable: ', string, 'have type: ', typeof(string));
console.log('Variable: ', number, 'have type: ', typeof(number));
console.log('Variable: ', isTrue, 'have type: ', typeof(isTrue));


/* Task 7 💻
Запросить у пользователя имя и возраст и вывести их в консоль. */

const myName = prompt('Enter your name');
const myAge = prompt('Enter your age');

console.log(myName);
console.log(myAge);


/* 
ADVANCED level
Task 1 👨‍🏫
Поменяйте значение переменных местами не создавая дополнительной переменной: */

let a = 4;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a,b);
