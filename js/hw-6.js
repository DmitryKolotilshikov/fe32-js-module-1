// NORMAL level

/* Task 1 🖥
Дан массив:

    const colors = ['red', 'green', 'blue']
Выведите в консоль его длину. */

const colors = ['red', 'green', 'blue'];
console.log (colors.length);

/*Task 2 🖥
Дан массив:

    const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны. */

const animals = ['monkey', 'dog', 'cat'];
console.log (animals.pop());
console.log (animals.at(-1));


/*Task 3 🖥
Дан массив:

    const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.

Реализуйте решение двумя способами. */

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log (numbers);


const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log (numbers);


/*Task 4 🖥
Дан массив:

    const students = ['Polina', 'Dasha', 'Masha']
Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
Полученный результат не забудьте вывести в консоль. */

const students = ['Polina', 'Dasha', 'Masha'];
students.pop ();
students.push ('Borya');
students.shift ();
students.unshift ('Andrey');
console.log (students);

students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);

/*
Task 5 🖥
Дан массив:

    const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл for, затем for of. */

const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
   console.log (cats[i]);
}

const cats = ['Gachito', 'Tom', 'Batman'];
for (const value of cats) {
   console.log (value)
};

/*
Task 6 🖥
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8 */

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newNumbers = evenNumbers.concat (oddNumbers);
console.log (newNumbers);

newNumbers.indexOf (8);

/*
Task 7
Дан массив:

    const binary = [0, 0, 0, 0]
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.
[0, 0, 0, 0] -> '0101010' */

const binary = [0, 0, 0, 0];
const newBinary = binary.map ((element) => element + '1');
console.log (newBinary.join(''));

console.log(binary.join('1'));


//ADVANCED level

/* Task 1
Реализуйте функцию которая будет проверять, является ли слово палиндромом.*/


const word = prompt ('Введите слово для проверки');

const checkPalindrome = (word) => {
    const res = word === word.split('').reverse().join(''); 
    return res;
}

console.log (checkPalindrome(word));

/* Task 2
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
Выведите в консоль среднее значение чисел в многомерном массиве.*/

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

const getAverage = (array) => {
    const res = array.reduce((res, cur) => {
        res.count += cur.length;
        res.sum += cur.reduce((s, v) => { return s += v }, 0);

        return res
    }, { count: 0, sum: 0 });

    return res.sum / res.count; 
} 

console.log(getAverage(matrix));

//сделала копипаст для себя, чтобы потом разобраться

/*
Task 3
Дан массив:

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные.
Оба массива затем выведите в консоль. */

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positiveNumbers = mixedNumbers.filter ((element) => element >= 0);
const negativeNumbers = mixedNumbers.filter ((element) => element < 0);

console.log(positiveNumbers);
console.log(negativeNumbers);

/*
Task 4
Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
В конце вывести оба массива в консоль */

const numbers = [Math.trunc(Math.random()*10), Math.trunc(Math.random()*10), Math.trunc(Math.random()*10), Math.trunc(Math.random()*10), Math.trunc(Math.random()*10)];
const newArrayNumbers = numbers.map((element) => Math.pow(element,3));

console.log (numbers);
console.log (newArrayNumbers);
