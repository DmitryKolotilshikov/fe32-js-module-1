//HW-6
//Task-1
//Дан массив:
const colors = ['red', 'green', 'blue'];
//Выведите в консоль его длину.
console.log(colors.length);

//Task-2
//Дан массив:
//Выведите в консоль его последний элемент вне зависимости от его длинны.
const animals = ['monkey', 'dog', 'cat'];

const lastElement = animals[animals.length - 1];
const reverseArr = animals.reverse();
const lastElement2 = animals.pop();

console.log(lastElement);
console.log(reverseArr[0]);
console.log(lastElement2);

//Task-3
//Дан массив:
//Удалите все элементы в массиве и выведите в консоль полученный результат.
const numbers = [5, 43, 63, 23, 90];
console.log(numbers);

while(numbers.length !== 0){
    numbers.pop();
    console.log(numbers);
}

while(numbers.length !== 0){
    numbers.shift();
    console.log(numbers);
}

//Task-4
//Дан массив:
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.
const students = ['Polina', 'Dasha', 'Masha'];

students.splice(students.length - 1, 1, "Borya");
students.splice(students[0], 1, "Andrey");

console.log(students);

//Task-5
//Дан массив:
//Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for (const index of cats) {
    console.log(index);
}

//Task-6
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const finalArr = evenNumbers.concat(oddNumbers);

console.log(finalArr);

//Task-7
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
const binary = [0, 0, 0, 0];

for (const iterator of binary) {
    binary.splice(binary.indexOf(iterator), 1, "01");
}

console.log(binary);

//Advanced
//Task-1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const checkFroPolindrom = (word) => {
    let regex = /[^A-Za-z0-9]/g;

    word = word.toLowerCase().replace(regex, '');

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(checkFroPolindrom("logol"));

//Task-2
//Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let matrixSum = 0;
let totalElements = 0;

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        matrixSum += matrix[i][j];
        totalElements++;
    }
}

console.log(matrixSum / totalElements);

//Task-3
//Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const positiveArr = [];
const negativeArr = [];

for (let index = 0; index < mixedNumbers.length; index++) {
   if (mixedNumbers[index] >= 0) {
        positiveArr.push(mixedNumbers[index]);
   } 
   else {
        negativeArr.push(mixedNumbers[index]);
   }
}

console.log(positiveArr);
console.log(negativeArr);

//Task-4
// Создать массив длинной не менее 5, из динамически созданных случайных чисел.
// Далее написать алгоритм который берет все числа из исходного массива,
// возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
const generateArr = (arrLenth) => {
    const arr = [];

    for (let index = 0; index < arrLenth; index++) {
        arr.push(Math.floor(Math.random() * 50));
    }

    return arr;
}

const modifyArray = (array) => {
    const modifyArr = [];
    let currentElement = 0;

    for (let index = 0; index < array.length; index++) {
        currentElement = array[index];
        modifyArr.push(Math.pow(currentElement, 3));
    }

    return modifyArr;
}

const arr = generateArr(10);
const modifyArr = modifyArray(arr);

console.log(arr);
console.log(modifyArr);