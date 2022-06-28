/*
  START TASK 1:
  Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
*/

let x = 20;
let y = 58;
let z = 42;

console.log('TASK 1');
console.log(`The sum of variables is ${x + y + z}`);

/*
  END TASK 1
*/

/*
  ==================================
*/

/*
  START TASK 2:
  Создайте переменные:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году

  Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**
*/

const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
const yearOfBirth = 1992;
let currentYear = new Date().getFullYear();
let myAgeInSeconds = (currentYear - yearOfBirth) * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;

console.log('TASK 2');
console.log(`My age in seconds is ${myAgeInSeconds}`);

/*
  END TASK 2
*/

/*
  ==================================
*/

/*
  START TASK 3:
  ```javascript
      let count = 42
      let userName = '42'
  ```

  Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.
*/

let count = 42;
let userName = '42';

let countToString = String(count);
let countToStringAlt = '' + count;

let userNameToInt = Number(userName);
let userNameToIntAlt = parseInt(userName);

console.log('TASK 3');
console.log( `count is ${typeof count}, countToString is ${typeof countToString}, countToStringAlt is ${typeof countToStringAlt}`);
console.log(`userName is ${typeof userName}, userNameToInt is ${typeof userNameToInt}, userNameToIntAlt is ${typeof userNameToIntAlt}`);

/*
  END TASK 3
*/

/*
  ==================================
*/

/*
  START TASK 4:
  Имеется три переменные:

  ```javascript
    let a = 1
    let b = 2
    let c = "белых медведей"
  ```

  Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
*/

let a = 1;
let b = 2;
let c = "белых медведей";

console.log('TASK 4');
console.log(`${a}${b} ${c}`);

/*
  END TASK 4
*/

/*
  ==================================
*/

/*
  START TASK 5:
  Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

    - доступ
    - морпех
    - наледь
    - попрек
    - рубило
*/

const accessWord = "доступ";
const marineWord = "морпех";
const frostWord = "наледь";
const reproachWord = "попрек";
const choppedWord = "рубило";

let lengthSum = accessWord.length + marineWord.length + frostWord.length + reproachWord.length + choppedWord.length;

console.log('TASK 5');
console.log(`Length of all words is ${lengthSum}`);

/*
  END TASK 5
*/

/*
  ==================================
*/

/*
  START TASK 6:
  Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

    `Variable: %variable name% have type: %type variable%`
*/

const numericVar = 486;
const stringVar = "Lorem ipsum dolor sit amet";
const booleanVar = true;

console.log('TASK 6');
console.log(`Variable: numericVar, have type: ${typeof numericVar};`);
console.log(`Variable: stringVar, have type: ${typeof stringVar};`);
console.log(`Variable: booleanVar, have type: ${typeof booleanVar};`);

/*
  END TASK 6
*/

/*
  ==================================
*/

/*
  START TASK 7:
  Запросить у пользователя имя и возраст и вывести их в консоль.
*/

const personName = prompt('Person Name:');
const personAge = prompt('Person Age:');

console.log('TASK 7');
console.log(`Person name: ${personName}, person age: ${personAge};`);

/*
  END TASK 7
*/

/*
  ==================================
*/

/*
  START ADVANCED TASK 1:
  Поменяйте значение переменных местами не создавая дополнительной переменной:

  ```javascript
      let a = 4
      let b = 3
  ```
*/

let q = 4;
let w = 3;

console.log('ADVANCED TASK 1');
console.log(`Previous q: ${q}`);
console.log(`Previous w: ${w}`);

q = q + w;
w = q - w;
q = q - w;

console.log(`Current q: ${q}`);
console.log(`Current w: ${w}`);

/*
  END ADVANCED TASK 1
*/

/*
  ==================================
*/

/*
  START ADVANCED TASK 2:
  В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

  ```javascript
      let codeWord1 = "обернись";
      let codeWord2 = "неужели";
      let codeWord3 = "огурцы";
      let codeWord4 = "липкие";
      let codeWord5 = "?!";
  ```

  Создайте переменную **`cipher`** и поместите туда необходимые символы
*/

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log('ADVANCED TASK 2');
console.log(cipher);

/*
  END ADVANCED TASK 2
*/