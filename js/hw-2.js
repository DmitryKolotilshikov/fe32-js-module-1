// Task 1

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log(sum);

// Task 2

let sec = 60;
let min = 60;
let h = 24;
let days = 365;


let myAgeInSeconds=30 * days * h * min * sec;
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

let a = 1;
let b = 2;
let c = 'белых медведей';

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
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);