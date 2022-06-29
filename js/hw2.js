// task 1
const x = 20;
const y = 58;
const z = 42;
const sum = x+y+z;
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
const count = 42
const userName = '42'
// const count_userName = count + userName;
// const count_userName = count + +userName;
const count_userName = Number(userName) + count;

console.log(count_userName);
 
// task 4
const a = 1
const b = 2
const c = "белых медведей"
const  abc  = a + (b + c);
console.log(abc);

// task5
const d = 'доступ'; 
const m = 'морпех';
const n = 'наледь';
const p = 'попрек';
const r = 'рубило';
const all = d+m+n+p+r;

var str = all;
console.log(str.length);

// task 6
 const variable = 'Variable: variable name';
 let type = 'have type: type variable';
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


