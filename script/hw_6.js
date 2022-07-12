/*
  TASK 1
  Дан массив:

    const colors = ['red', 'green', 'blue']
  Выведите в консоль его длину.
*/

console.log('TASK 1');

const colors = ['red', 'green', 'blue'];

console.log(`Array with colors: ${colors}.`);
console.log(`Length of array with colors: ${colors.length}.`);

/*
  ==================================
*/


/*
  TASK 2
  Дан массив:

    const animals = ['monkey', 'dog', 'cat']
  Выведите в консоль его последний элемент вне зависимости от его длинны.
*/

console.log('TASK 2');

const animals = ['monkey', 'dog', 'cat'];

console.log(`Array with animals: ${animals}.`);
console.log(`The last element in array with animals: ${animals[animals.length - 1]}.`);

/*
  ==================================
*/


/*
  TASK 3
  Дан массив:

    const numbers = [5, 43, 63, 23, 90]
  Удалите все элементы в массиве и выведите в консоль полученный результат.

  Реализуйте решение двумя способами.
*/

console.log('TASK 3');

const numbers = [5, 43, 63, 23, 90];

console.log(`Current array: ${numbers}.`);

console.log(`New array: "${numbers.slice(numbers.length)}" (Way 1).`);

numbers.splice(0);
console.log(`New array: "${numbers}" (Way 2).`);

/*
  ==================================
*/


/*
  TASK 4
  Дан массив:

    const students = ['Polina', 'Dasha', 'Masha']
  Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
  Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
  Полученный результат не забудьте вывести в консоль.
*/

console.log('TASK 4');

const students = ['Polina', 'Dasha', 'Masha'];

console.log(`Current array with students: ${students}.`);

students.splice(0, 1, 'Borya');
students.splice(-1, 1, 'Andrey');
console.log(`New array with students: ${students}.`);

/*
  ==================================
*/


/*
  TASK 5
  Дан массив:

    const cats = ['Gachito', 'Tom', 'Batman']
  Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
*/

console.log('TASK 5');

const cats = ['Gachito', 'Tom', 'Batman'];

console.log(`Array with cats: ${cats}`);

console.log('By "for":');
for(let i = 0; i < cats.length; i++) {
  console.log(`Cat ${i + 1}: ${cats[i]}.`);
}

console.log('By "for of":');
for(const cat of cats) {
  console.log(`Cat ${cats.indexOf(cat) + 1}: ${cat}.`);
}

/*
  ==================================
*/


/*
  TASK 6

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]

  Соедините два массива чисел в один.
  В полученном массиве попробуйте найти индекс числа 8
*/

console.log('TASK 6');

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
console.log(`Array with even numbers: ${evenNumbers}`);
console.log(`Array with odd numbers: ${oddNumbers}`);

const joinedArray = evenNumbers.concat(oddNumbers);
console.log(`Joined array: ${joinedArray}.`);

console.log(`Index of 8 in joined array: ${joinedArray.indexOf(8)}.`);

/*
  ==================================
*/


/*
  TASK 7
  Дан массив:

    const binary = [0, 0, 0, 0]
  Наш бинарный массив неполный, в нем явно не хватает единиц.
  Превратите данный массив в строку.
  [0, 0, 0, 0] -> '0101010'
*/

console.log('TASK 7');

const binary = [0, 0, 0, 0];

console.log(`Current binary: ${binary}`);

console.log(`New binary: ${binary.join('1')}`);

/*
  ==================================
*/


/*
  ADVANCED TASK 1
  Реализуйте функцию которая будет проверять, является ли слово палиндромом.
*/

console.log('ADVANCED TASK 1');

//const palindromeWord = prompt(`Enter your word`);
const palindromeWord = 'Bob';
const isPalindrome = (palindromeWord.toLowerCase() === palindromeWord.split('').reverse().join('').toLowerCase());

if (isPalindrome) {
  //alert(`${palindromeWord} is palindrome`);
  console.log(`${palindromeWord} is palindrome`);
} else {
  //alert(`${palindromeWord} isn't palindrome`);
  console.log(`${palindromeWord} isn't palindrome`);
}

/*
  ==================================
*/


/*
ADVANCED TASK 2
  const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
  ]
Выведите в консоль среднее значение чисел в многомерном массиве.
*/

console.log('ADVANCED TASK 2');

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

console.log(`Matrix: ${matrix}`);

let matrixSum = 0;
let matrixElCounts = 0;

for(let i = 0; i < matrix.length; i++) {
  matrixElCounts += matrix[i].length;

  for(let k = 0; k < matrix[i].length; k++) {
    matrixSum += matrix[i][k];
    matrixElCounts += 0;
  }
}

console.log(`Sum of elements in the matrix: ${matrixSum}.`);
console.log(`Number of elements in the matrix: ${matrixElCounts}.`);
console.log(`Everage value: ${matrixSum / matrixElCounts}.`);

/*
  ==================================
*/


/*
  ADVANCED TASK 3
  Дан массив:

   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
  Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.
*/

console.log('ADVANCED TASK 3');

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const mixedNumbersPositive = [];
const mixedNumbersNegative = [];

console.log(`Current array of numbers: ${mixedNumbers}`);

for(let i = 0; i < mixedNumbers.length; i++) {

  if(mixedNumbers[i] >= 0) {
    mixedNumbersPositive.push(mixedNumbers[i]);
  } else {
    mixedNumbersNegative.push(mixedNumbers[i]);
  }
}

console.log(`Positive array of numbers: ${mixedNumbersPositive}.`);
console.log(`Negative array of numbers: ${mixedNumbersNegative}.`);

/*
  ==================================
*/


/*
  ADVANCED TASK 4
  Создать массив длинной не менее 5, из динамически созданных случайных чисел.
  Далее написать алгоритм который берет все числа из исходного массива, возводит их в
  куб и записывает в новый массив. В конце вывести оба массива в консоль.
*/

console.log('ADVANCED TASK 4');

const randomArr = [];

for(let i = 0; i <= 5; i++) {
  randomArr.push(Math.trunc(Math.random() * 10));
}

console.log(`Array with random numbers: ${randomArr}`);

const cubbedRandonArr = randomArr.map((el) => el * el * el);
console.log(`Array with modified random numbers: ${cubbedRandonArr}`);
/*
  ==================================
*/