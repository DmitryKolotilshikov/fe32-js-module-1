'use strict';
//=========================================================================================================================================================================
//Task 1
//Выведи все элементы массива в консоль с помощью метода forEach

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

//Function declaration
function arrayEach(arr) {
  arr.forEach((el) => console.log(el));
}
arrayEach(fibonacci);
//Arrow function
const arrayEach2 = (arr) => arr.forEach((el) => console.log(el));
arrayEach2(fibonacci);

//=========================================================================================================================================================================

//Task 2
//Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:['member 1: Darya', 'member 2: Masha', ... etc]
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//Function declaration
function mapArray(arr) {
  return arr.map((el, index) => `member ${index}: ${el}`);
}
mapArray(users);

//Arrow function
const mapArrowArr = (arr) => arr.map((el, index) => `member ${index}: ${el}`);
mapArrowArr(users);

//=========================================================================================================================================================================

//Task 3
//С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21];

//Function declaration
function arrayWithoutNegative(arr) {
  return arr.filter((el) => el >= 0);
}
arrayWithoutNegative(numbers);

//Arrow function
const arrayWithoutNegativeArrow = (arr) => arr.filter((el) => el >= 0);
arrayWithoutNegativeArrow(numbers);

//=========================================================================================================================================================================

//Task 4
//Используя метод reduce получите сумму всех чисел массива.
//Function declaration
function fibonacciReduce(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}
fibonacciReduce(fibonacci);
//Arrow function
const fibonacciSum = (arr) => arr.reduce((acc, current) => acc + current, 0);
fibonacciSum(fibonacci);

//=========================================================================================================================================================================

//Task 5
//Используя метод find найдите в массиве первое четное число.
const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
//Function declaration
function findNumber(arr) {
  return arr.find((el) => el % 2 === 0);
}
findNumber(numbers1);

//Arrow function
const findNumberArrow = (arr) => arr.find((el) => el % 2 === 0);
findNumberArrow(numbers1);

//=========================================================================================================================================================================

//ADVANCED level
//Task 1
// Написать функцию конструктор Student

// В каждом объекте студента должны быть поля salary , rate , name

// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

// Создать массив students и поместить в него студентов.

// Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// rate имеет 4 категории A B C D

// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
  this.salary = salary;
  this.rate = rate;
  this.name = name;
  this.getRating = function () {
    switch (this.rate) {
      case 'A':
        return this.salary * 12;
      case 'B':
        return this.salary * 9;
      case 'C':
        return this.salary * 6;
      case 'D':
        return this.salary * 0;
    }
  };
}
const student1 = new Student(2800, 'A', 'Katya');
const student2 = new Student(3000, 'B', 'Sasha');
const student3 = new Student(3500, 'C', 'Ivan');
const student4 = new Student(4000, 'D', 'Vera');
const student5 = new Student(3300, 'A', 'Evgeni');

const arr = [];
arr.push(student1, student2, student3, student4, student5);
function getSumRating() {
  return arr
    .map((el) => el.getRating())
    .reduce((acc, current) => acc + current, 0);
}
getSumRating(arr);

//=========================================================================================================================================================================

//Task 2 Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

const deleteVowels = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowel.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
};
deleteVowels('This website is for losers LOL!');

//=========================================================================================================================================================================

//Task 3 Нет истории, нет теории
//В приведенных ниже примерах показано, как написать функцию:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
const accum = (str) => {
  const arr = str.split('');
  return arr
    .map((el) => el.toUpperCase())
    .map((el, index) => el + el.toLowerCase().repeat(index))
    .reduce((acc, curent) => acc + '-' + curent);
};
accum('cwAt');

//=========================================================================================================================================================================

// Task 4  Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5
const highAndLow = (str) => {
  const max = str
    .split(' ')
    .map((el) => +el)
    .reduce((acc, curent) => (acc > curent ? acc : curent));
  const min = str
    .split(' ')
    .map((el) => +el)
    .reduce((acc, curent) => (acc < curent ? acc : curent));
  return [`Max:${max}`, `Min:${min}`];
};
highAndLow('1 2 -3 4 5');

//=========================================================================================================================================================================

// Task 5  Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  const arr = str.split('').map((el) => el.toLowerCase());
  return (
    arr.filter((el, index) => arr.indexOf(el) == index).length === arr.length
  );
};
isIsogram('moOse');

//=========================================================================================================================================================================

// //Task 6 Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную total1

// Затем замените все числа 7 на число 1 и назовите это число total2

// После верните разницу между суммой цифр total1 и total2

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

const strToSymbol = (str) => {
  const arr = str
    .split('')
    .map((el) => el.codePointAt(0))
    .join('');
  const total1 = +arr;
  const arr1 = total1.toString().split('');
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '7') {
      arr1.splice(i, 1, '1');
    }
  }
  const total2 = +arr1.join('');
  return total1 - total2;
};
strToSymbol('ABC');

//=========================================================================================================================================================================

// Task 7  Дубликаты
// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен (, если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

const duplicate = (str) => {
  const arr = str.toLowerCase().split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result += '(';
    } else result += ')';
  }
  return result;
};
duplicate('(( @');
