'use strict';

//Task 1
//Дан массив:
//Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2
//Дан массив:
//Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));
console.log(animals[animals.length - 1]);
console.log(animals.slice(-1));
console.log(animals.pop());

//Task3
//Дан массив:
//Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers = [5, 43, 63, 23, 90];
// numbers.length = 0;
numbers.splice(0, numbers.length);
console.log(numbers);

//Task4
//Дан массив:
//Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
//Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
//Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];
students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);

//Task5
//Дан массив:
//Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
//Cycle FOR====================================
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
  console.log('Value:', cats[i]);
}
//Cycle FOR OF=================================
for (let value of cats) {
  console.log('Value:', value);
}

//Task 6
//Соедините два массива чисел в один.
//В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const mergedArray = evenNumbers.concat(oddNumbers);
console.log(mergedArray.indexOf(8));

//Task7
//Дан массив:
//Наш бинарный массив неполный, в нем явно не хватает единиц.
//Превратите данный массив в строку.

const binary = [0, 0, 0, 0];
console.log(binary.join('1'));

//ADVANCED level Task1
//Для решения задач используйте циклы for или for of
//Реализуйте функцию которая будет проверять, является ли слово палиндромом.

//Легкий путь --------->
const checkPalindromes = (s) => s === s.split('').reverse().join('');
checkPalindromes('assa');

//Сложный путь------------>
const palindromTest = (str) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }
  return true;
};
palindromTest('acca');

//Task 2
//Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let sum = 0;
let count = 0;
for (let value of matrix) {
  count += value.length;
  value.forEach((el) => (sum += el));
}
console.log('Среднее значение матрицы:', sum / count);

//Task 3
//Дан массив:
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = mixedNumbers.filter((el) => el >= 0);
const negativeNumbers = mixedNumbers.filter((el) => el < 0);
console.log(positiveNumbers);
console.log(negativeNumbers);

//Task 4
//Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

const randomArray = [
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
];
const newArray = randomArray.map((el) => el ** 3);
console.log('Исходный массив:', randomArray);
console.log('Новый массив:', newArray);
