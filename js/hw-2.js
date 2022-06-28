// Task 1

const x = 20;
const y = 58;
const z = 42;
const sum = x + y + z;
console.log(sum);

// Task 2

const sec = 60;
const min = 60;
const h = 24;
const days = 365;


const myAgeInSeconds=30 * days * h * min * sec;
console.log(myAgeInSeconds);


// Task 3

let count = 42;
let userName = '42';

let countToString = string(count);
let userNameToNumber = +userName;

console.log(countToString);
console.log(userNameToNumber);

//way 2

/*let count = 42;
let userName = '42';

let countToString = `${count}`;
let userNameToNumber = Number(userName);

console.log(countToString);
console.log(userNameToNumber);*/

// Task 4

const a = 1;
const b = 2;
const c = 'белых медведей';

let aString = a.toString();
let bString = b.toString();

let aBC = aString + bString + c;
console.log(aBC);

// Task 5

const oneWord = 'доступ';
const twoWord = 'морпех';
const threeWord = 'наледь';
const fourWord = 'попрек';
const fiveWord = 'рубило';

const lengthWords = oneWord.length + twoWord.length + threeWord.length + fourWord.length + fiveWord.length;

console.log(lengthWords);

// Task 6 

const number = 30;
const string = 'String';
let isFalse = false;

console.log('Variable: number have type: number');
console.log('Variable: string have type: string');
console.log('Variable: isFalse have type: boolean');

// Task 7

let name = prompt ('Введите ваше имя');
let age = prompt ('Введите ваш возраст');

alert(`Здравствуйте ${name}`);
alert(`Вам ${age} лет!`);

//ADVANCED level
//Task 1

let a = 4;
let b = 3;

[a, b] = [b, a];

//Task 2
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);