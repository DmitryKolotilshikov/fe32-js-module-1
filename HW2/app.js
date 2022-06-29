//Task 1
const x = 20;
const y = 58;
const z = 42;

const result = x + y + z;

console.log(result);

//Task 2
const secondsInMin = 60;
const minutsInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAge = 20;

const myYearInSeconds = (myAge * 365) * hoursInDay * minutsInHour * secondsInMin;

console.log(myYearInSeconds);

//Task 3
const count = 42;
const userName = '42';

const countStr = count.toString();
const countStr1 = String(count);

const userNameInt = Number(userName);
const userNameInt1 = parseInt(userName);

console.log(typeof(count));
console.log(typeof(userName));
console.log(typeof(countStr));
console.log(typeof(countStr1));
console.log(typeof(userNameInt));
console.log(typeof(userNameInt1));

//Task 4
const a = 1;
const b = 2;
const c = "белых медведей";

const resulted = (`${a.toString()}${b.toString()} ${c}`);

console.log(resulted);

//Task 5
const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубило";

const lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords);

//Task 6
const name = "Tim";
const age = 20;
const isGoodGuy = true;

let variableName = Object.keys({name})[0];
let variableType = typeof(name);

console.log(`variable ${variableName} have type: ${variableType}`);

variableName = Object.keys({age})[0];
variableType = typeof(age);

console.log(`variable ${variableName} have type: ${variableType}`);

variableName = Object.keys({isGoodGuy})[0];
variableType = typeof(isGoodGuy);

console.log(`variable ${variableName} have type: ${variableType}`);

//Мое недовольство отсутсвию метода nameof - безгранично!!!!

//Task 7
const _userName = prompt("Enter your name, please");
const _userAge = prompt("Enter your age, please");

console.log(`Nice to meet you ${_userName}. Wow, your are ${_userAge} years old!`);

//Task 1 Advanced
let _a = 4;
let _b = 3;

// _a -= _b;
// _b += _a;
// _a = _b--;

_a = 12 / _a;
_b = 12 / _b;

console.log(`a=${_a}`);
console.log(`b=${_b}`);

//Task 2 Advanced
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";

const codeWord = codeWord1.charAt(1) + codeWord2.charAt(1)  + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);

console.log(codeWord);