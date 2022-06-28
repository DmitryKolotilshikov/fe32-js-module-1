// Task 1 Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
const x = 20;
const y = 58;
const z = 42;

const sumNumber = x + y + z;
console.log(sumNumber);


// Task 2 Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
const secToMin = 60;
const minToHour = 60;
const hourToDays = 24;
const daysToYear = 365;

const secToHour = secToMin * minToHour;
console.log(secToHour);

const secToDays = secToHour * hourToDays;
console.log(secToDays);

const secToYear = daysToYear * secToDays;
console.log(secToYear);

const myAge = 27;
myAgeInSeconds = myAge * secToYear;
console.log(myAgeInSeconds);


// Task 3 Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.
const count = 42;
const userName = "42";
console.log(typeof count);
console.log(typeof userName);

const countStr = String(count);
const userNameNum = Number(userName);

console.log(typeof countStr);
console.log(typeof userNameNum);

// let countStr = count.toString();
// let userNameNum = userName.toString();

// let countStr = `${count}`;
// let userNameNum = +userName;


// Task 4 Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.
const a = 1;
const b = 2;
const c = "белых медведей";

const sumString = `${a}${b} ` + c;
console.log(sumString);


// Task 5 Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:
const access = "доступ";
const marine = "морпех";
const ice = "наледь";
const reproach = "попрек";
const chopper = "рубило";

const lengthWords = access + marine + ice + reproach + chopper;
console.log(lengthWords.length);


// Task 6 Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
const string = "строка";
const number = 42;
const boolean = true;

console.log("Variable: ", string, "have type: ", typeof string);
console.log("Variable: ", number, "have type: ", typeof number);
console.log("Variable: ", boolean, "have type: ", typeof boolean);


// Task 7 Запросить у пользователя имя и возраст и вывести их в консоль.
const name = prompt("Введите Ваше имя!");
alert("Ваше имя: " + name);
const age = prompt("Введите Ваш возраст!");
alert("Ваш возраст: " + age);


// Task 8 Поменяйте значение переменных местами не создавая дополнительной переменной:
let f = 4;
let g = 3;

//Вариант 1
f = f + g;
g = f - g;
f = f - g;
console.log(f);
console.log(g);

//Вариант 2
let l = 4;
let k = 3;
--l;
++k;

console.log(l);
console.log(k);


//Task 9 В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";

const cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);