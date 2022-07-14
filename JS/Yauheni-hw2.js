#### Task 1 💻

Создайте переменные, затем сложите их и выведите результат в консоль разработчика.


```javascript
    let x = 20
    let y = 58
    let z = 42
```
const  x = 20;
const  y = 58;
const z = 42;
const result = x + y + z;
console.log(result);




#### Task 2 💻

Создайте переменные:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
    
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**



const sec = 60;
const minutes = 60;
const hour = 24;
const days = 365;
const secInYear = sec * minutes * hour * days;
const currentAge = 26;
const myAgeInSeconds = currentAge * secInYear;
console.log(myAgeInSeconds);





// #### Task 3 💻

// ```javascript
//     let count = 42
//     let userName = '42'
// ```
// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.


const count = 42;
const userName = '42';
const stringCount = String(count);
const stringCount2 = count + '';
const intUserName = +userName;
const intUserName2 = Number(userName);
console.log(typeof stringCount);
console.log(typeof stringCount2);
console.log(typeof intUserName);
console.log(typeof intUserName2);




#### Task 4 💻
Имеется три переменные:


```javascript
  let a = 1
  let b = 2
  let c = "белых медведей"
```

Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.


const a = 1;
const b = 2;
const c = 'белых медведей';
const d = a + '' + (b + '');
console.log(d + ' ' + c);




#### Task 5 💻

Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

    - доступ 
    - морпех
    - наледь
    - попрек
    - рубило


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




#### Task 6 💻
    
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

    `Variable: %variable name% have type: %type variable%`


    const first = 'строка';
    const second = 42;
    const third = true;
    console.log('Variable:first have', typeof first);
    console.log('Variable:second have', typeof second);
    console.log('Variable:third have', typeof third);




#### Task 7 💻

Запросить у пользователя имя и возраст и вывести их в консоль.


const form = prompt('What`s your name?');
const form1 = prompt('How old are u?');
console.log('Username:' + form, 'User age:' + form1);




### ADVANCED level

#### Task 1 👨‍🏫 

Поменяйте значение переменных местами не создавая дополнительной переменной:


```javascript
    let a = 4
    let b = 3
```
function swapNumbers(a, b) {
    console.log(a, b);
  
    a = a + b;
    b = a - b;
    a = a - b;
  
    console.log(a, b);
  }
  swapNumbers(4, 3);



#### Task 2 👨‍🏫 

В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

```javascript
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
```

Создайте переменную **`cipher`** и поместите туда необходимые символы


const codeWord1 = 'обернись';
const codeWord2 = 'неужели';
const codeWord3 = 'огурцы';
const codeWord4 = 'липкие';
const codeWord5 = '?!';
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
