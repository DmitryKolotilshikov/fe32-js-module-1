//Task 1
let x = 20;
let y = 58;
let z = 42;

let result = x + y + z;

console.log(result);

//Task 2
const secondsInMin = 60;
const minutsInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

let myAge = 20;

let myYearInSeconds = (myAge * 365) * hoursInDay * minutsInHour * secondsInMin;

console.log(myYearInSeconds);

//Task 3
let count = 42;
let userName = '42';

let countStr = count.toString();
let countStr1 = String(count);

let userNameInt = Number(userName);
let userNameInt1 = parseInt(userName);

console.log(typeof(count));
console.log(typeof(userName));
console.log(typeof(countStr));
console.log(typeof(countStr1));
console.log(typeof(userNameInt));
console.log(typeof(userNameInt1));

//Task 4
let a = 1;
let b = 2;
let c = "белых медведей";

let resulted = (`${a.toString()}${b.toString()} ${c}`);

console.log(resulted);

//Task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords);

//Task 6
let name = "Tim";
let age = 20;
let isGoodGuy = true;

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
let _userName = prompt("Enter your name, please");
let _userAge = prompt("Enter your age, please");

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
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let codeWord = codeWord1.charAt(1) + codeWord2.charAt(1)  + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);

console.log(codeWord);