/* Task 1 desktop_computer
Выведите в консоль его длину. */
const colors = ['red', 'green', 'blue'];
console.log(colors.length);


/* Task 2 desktop_computer
Выведите в консоль его последний элемент вне зависимости от его длинны. */
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));
console.log(animals[animals.length - 1])


/* Task 3 desktop_computer
Удалите все элементы в массиве и выведите в консоль полученный результат.
Реализуйте решение двумя способами. */
const numbers = [5, 43, 63, 23, 90];
console.log(numbers.splice(0, 5));
console.log(numbers);

const numbers2 = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers3 = [5, 43, 63, 23, 90];
numbers3.splice(numbers3[numbers3.length])
console.log(numbers3)


/* Task 4 desktop_computer
Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
Полученный результат не забудьте вывести в консоль. */
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);


/* Task 5 desktop_computer
Выведите в консоль все элементы массива.Сначала через циклfor, затемfor of. */
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i])
}

for (let item of cats) {
  console.log(item)
}


/* Task 6 desktop_computer
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8 */
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let newArray = [];
newArray = newArray.concat(evenNumbers, oddNumbers);
console.log(newArray);
console.log(newArray.indexOf(8));


/* Task 7 desktop_computer
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку. */
const binary = [0, 0, 0, 0]
const newBinary = binary.join(1)
console.log(newBinary)


/* ADVANCED level
Task 1 man_teacher
Реализуйте функцию которая будет проверять, является ли слово палиндромом. */
function checkPalindrom(word) {
  if (word === word.split('').reverse().join('')) {
    return (console.log('Это палиндром!'))
  } else {
    return (console.log('Это не палиндром!'))
  }
}
console.log(checkPalindrom('поп'))


/* Task 2 man_teacher
Выведите в консоль среднее значение чисел в многомерном массиве. */
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]
matrix.forEach((item, index) => {
  item = matrix[index].reduce((sum, item, index) => sum + item, 0)
  item = item / matrix[index].length
  console.log(item)
})


/* Task 3 man_teacher
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные.Оба массива затем выведите в консоль. */
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
const positiveNumbers = []
const negativeNumbers = []
for (const i of mixedNumbers) {
  if (i >= 0) {
    positiveNumbers.push(i)
  } else {
    negativeNumbers.push(i)
  }
}
console.log(positiveNumbers)
console.log(negativeNumbers)


/* Task 4 man_teacher
Создать массив длинной не менее 5, из динамически созданных случайных чисел.Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив.В конце вывести оба массива в консоль. */
const myArray = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const newMyArray = myArray.map((item) => Math.pow(item, 3))
console.log(newMyArray)