/* Task 1 🖥
Дан массив:
const colors = ['red', 'green', 'blue']
Выведите в консоль его длину. */

const colors = ['red', 'green', 'blue'];
console.log(colors.length);


/* Task 2 🖥
Дан массив:
const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны. */

const animals = ['monkey', 'dog', 'cat'];
const lastElement = animals.pop();
console.log(lastElement);


/* Task 3 🖥
Дан массив:
const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат. */

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, 5);
console.log(numbers);

// Способ 2:

const deletedNumbers = numbers.slice(0,5);
console.log(deletedNumbers);


/* 
Task 4 🖥
Дан массив:
const students = ['Polina', 'Dasha', 'Masha']
Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
Полученный результат не забудьте вывести в консоль. */

const students = ['Polina', 'Dasha', 'Masha'];

students.splice(-1, 1, "Borya");
students.splice(0, 1, "Andrey");
console.log(students);


/* Task 5 🖥
Дан массив:
const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл for, затем for of. */

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i=0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (const value of cats) {
    console.log(value);
}


/* Task 6 🖥
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8 */

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const joinedArray = evenNumbers.concat(oddNumbers);
console.log(joinedArray.indexOf(8));


/* Task 7 🖥
Дан массив:
const binary = [0, 0, 0, 0]
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.
[0, 0, 0, 0] -> '0101010' */

const binary = [0, 0, 0, 0];
const stringBinary = binary.join("1");
console.log(stringBinary);


// ADVANCED level

/* Task 1 👨‍🏫
Реализуйте функцию которая будет проверять, является ли слово палиндромом. */

function palindrome(str) {
    let check = '';
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i];
    }
    return str == check;
  }

  console.log(palindrome("оно"));
  console.log(palindrome("дом"));


/*   Task 3 👨‍🏫
Дан массив:
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные.
Оба массива затем выведите в консоль. */

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const filteredArray = (mixedNumbers) => {
    return mixedNumbers.filter((el) => {
        if (el >= 0) {
            return el;
        }
    });
}
const positiveNumbers = filteredArray(mixedNumbers);

console.log(positiveNumbers);

const filteredArray2 = (mixedNumbers) => {
    return mixedNumbers.filter((el) => {
        if (el < 0) {
            return el;
        }
    });
}
const negativeNumbers = filteredArray2(mixedNumbers);
console.log(negativeNumbers);


/* Task 4 👨‍🏫
Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, 
возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль. */

const array = [];
while(array.length < 5){
    let r = Math.floor(Math.random() * 100) + 1;
    if(array.indexOf(r) === -1) array.push(r);
}
console.log(array);
const newArray = array.map((el) => Math.pow(el, 3));
console.log(newArray);