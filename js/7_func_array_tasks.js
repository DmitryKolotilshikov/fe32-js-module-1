// Task 1 

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const checkPalindromes = s => s === s.split('').reverse().join('');

// ===============================
// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

const matrix1 = [
    [1,1,1],
    [2,2,2],
    [3,3,3],
] // 2

// let count = 0;
// let sum = 0;

// for (const el of matrix1) {
//     count += el.length;
//     el.forEach((elem) => {
//         sum += elem
//     })
// }

// console.log(sum / count)

const getAverage = (array) => {
    const res = array.reduce((res, cur) => {
        res.count += cur.length;
        res.sum += cur.reduce((s, v) => { return s += v }, 0);

        return res
    }, { count: 0, sum: 0 });

    return res.sum / res.count;
}

// console.log(getAverage(matrix));

// =============================================

// Создать массив длинной не менее 5, из динамически созданных 
// случайных чисел. Далее написать алгоритм который берет все 
// числа из исходного массива, возводит их в куб и записывает 
// в новый массив. В конце вывести оба массива в консоль.

const firstArray = Array(5).fill('_').map( _ => Math.round(Math.random() * 10));

const secondArray = firstArray.map(el => Math.pow(el, 3));

console.log('first Array: ', firstArray);
console.log('second Array: ', secondArray);
