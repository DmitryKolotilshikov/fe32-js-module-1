// Task 1
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

// let x = 20
// let y = 58
// let z = 42

const x = 20;
const y = 58;
const z = 42;
const sum = x + y + z;
console.log(sum);

// Task 2 Создайте переменные:

// - количество секунд в минуте
//- количество минут в часу
//- количество часов в сутках
//- количество суток в году
//  Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

const sec = 60;
const min = 60;
const h = 24;
const days = 365;


const myAgeInSeconds=30 * days * h * min * sec;
console.log(myAgeInSeconds);


// Task 3 let count = 42
    //let userName = '42'
    //Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. 
    //Попробуйте реализовать задачу двумя разными способами.

const count = 42;
const let userName = '42';

const countToString = string(count);
const userNameToNumber = +userName;

console.log(countToString);
console.log(userNameToNumber);

//way 2

/*const count = 42;
const userName = '42';

const countToString = `${count}`;
const userNameToNumber = Number(userName);

console.log(countToString);
console.log(userNameToNumber);*/

// Task 4 Имеется три переменные:

const a = 1;
const b = 2;
const c = 'белых медведей';

// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.

const aString = a.toString();
const bString = b.toString();

const aBC = aString + bString + c;
console.log(aBC);

// Task 5 Создайте переменные и поместите в них нижеприведенные слова. 
//Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

const oneWord = 'доступ';
const twoWord = 'морпех';
const threeWord = 'наледь';
const fourWord = 'попрек';
const fiveWord = 'рубило';

const lengthWords = oneWord.length + twoWord.length + threeWord.length + fourWord.length + fiveWord.length;

console.log(lengthWords);

// Task 6 Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

//`Variable: %variable name% have type: %type variable%`

const number = 30;
const string = 'String';
let isFalse = false;

console.log('Variable: number have type: number');
console.log('Variable: string have type: string');
console.log('Variable: isFalse have type: boolean');

// Task 7 Запросить у пользователя имя и возраст и вывести их в консоль.

let name = prompt ('Введите ваше имя');
let age = prompt ('Введите ваш возраст');

alert(`Здравствуйте ${name}`);
alert(`Вам ${age} лет!`);

//ADVANCED level
//Task 1 Поменяйте значение переменных местами не создавая дополнительной переменной:

let a = 4;
let b = 3;

[a, b] = [b, a];

//Task 2 В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную cipher и поместите туда необходимые символы

const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";

const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);