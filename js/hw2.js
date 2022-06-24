//Task 1
let x = 20;
let y = 58;
let z = 42;
let result = x + y + z;
console.log(result);
//Task 2
const sec = 60;
const minutes = 60;
const hour = 24;
const days = 365;
const secInYear = sec * minutes * hour * days;
const currentAge = 26;
const myAgeInSeconds = currentAge * secInYear;
console.log(myAgeInSeconds);
//Task  3
let count = 42;
let userName = '42';
let stringCount = String(count);
let stringCount2 = count + '';
let intUserName = +userName;
let intUserName2 = Number(userName);
console.log(typeof stringCount);
console.log(typeof stringCount2);
console.log(typeof intUserName);
console.log(typeof intUserName2);
//Task 4
let a = 1;
let b = 2;
let c = 'белых медведей';
let d = a + '' + (b + '');
console.log(d + ' ' + c);
//Task 5
const nameOne = 'доступ';
const nameTwo = 'морпех';
const nameThree = 'наледь';
const nameFour = 'попрек';
const nameFive = 'рубило';
const lengthWords =
  nameOne.length +
  nameTwo.length +
  nameThree.length +
  nameFour.length +
  nameFive.length;
console.log(lengthWords);
//Task 6
const first = 'строка';
const second = 42;
const third = true;
console.log('Variable:first have type:String');
console.log('Variable:second have type:Number');
console.log('Variable:third have type:Boolean');
//Task 7
let form = prompt('What`s your name?');
let form1 = prompt('How old are u?');
console.log('Username:' + form, 'User age:' + form1);

//advancedTask1
function swapNumbers(a, b) {
  console.log(a, b);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}

swapNumbers(4, 3);
//advancedTask2
let codeWord1 = 'обернись';
let codeWord2 = 'неужели';
let codeWord3 = 'огурцы';
let codeWord4 = 'липкие';
let codeWord5 = '?!';
const secondLetter = codeWord1.split('');
const secondLetter2 = codeWord2.split('');
const secondLetter3 = codeWord3.split('');
const secondLetter4 = codeWord4.split('');
const secondLetter5 = codeWord5.split('');
const cipher =
  secondLetter[1] +
  secondLetter2[1] +
  secondLetter3[1] +
  secondLetter4[1] +
  secondLetter5[1];
console.log(cipher);
