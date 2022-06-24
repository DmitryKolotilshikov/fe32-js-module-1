// task 1
let x = 20;
let y = 58;
let z = 42;
let sum = x+y+z;
console.log(sum);
// task 2
const sek = 60;
const min = 60;
const hour = 24;
const day = 365;
const age = 45;
const myAgeInSeconds = sek*min*hour*day*age;
console.log(myAgeInSeconds);
// task 3
let count = 42
let userName = '42'
// let count_userName = count + userName;
// let count_userName = count + +userName;
let count_userName = Number(userName) + count;

console.log(count_userName);
 
// task 4
let a = 1
let b = 2
let c = "белых медведей"
let  abc  = a + (b + c);
console.log(abc);

// task5
let d = 'доступ'; 
let m = 'морпех';
let n = 'наледь';
let p = 'попрек';
let r = 'рубило';
let all = d+m+n+p+r;

var str = all;
console.log(str.length);

// task 6
 const variable = 'Variable: %variable name%';
 let type = 'have type: %type variable%';
 console.log (variable,type);


// task 7
  const name = prompt ('ВВЕДИТЕ ВАШЕ ИМЯ');
  let years = prompt ('ВВЕДИТЕ ВАШ ВОЗРАСТ');
  console.log( name, years);

// advans level, task 1
let s = 4
let e = 3
console.log(s,e);
[s,e]=[e,s];
console.log(s,e);

// task 2
 let codeWord1 = "обернись";
 let codeWord2 = "неужели";
 let codeWord3 = "огурцы";
 let codeWord4 = "липкие";
 let codeWord5 = "?!";
console.log(codeWord1.slice(1,2), codeWord2.slice(1,2), codeWord3.slice(1,2), codeWord4.slice(1,2), codeWord5.slice(1,2));


