// Spread & Rest (...)
// Rest - остаточные параметры 
// Spread - оператор расширение

const sum = (a, b) => a + b;

// console.log(sum(1, 2, 3, 4, 5))

const sumAll = (...args) => {
    // console.log('args: ', args)
    let sum = 0;

    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

const getName = (firstName, lastName, ...desc) => {
    let fullName = `${firstName} ${lastName}`;

    for (const arg of desc) {
        if (typeof arg === 'string') {
            fullName += ` ${arg}`
        }
    }
    return fullName;
}

const resFullName = getName('Mister', 'Anderson', 'Matrix', 'has', 'you', 45);

// =======================================

function oldFunc() {
    console.log(arguments); // Псевдомассив arguments, не рекомендуется сегодня использовать
}

// =========================================

const numberArray1 = [1, 2, 3];
const numberArray2 = [99, -1, 100]; 

// const maxValue
//  = Math.max(numberArray1[0], numberArray1[1], numberArray1[2])

// const maxValue = Math.max(...numberArray1);
// const maxValue = Math.max(...numberArray1, ...numberArray2);
const maxValue 
= Math.max(...numberArray1, ...numberArray2, 150, 356);

// =========================================

const someStr = 'Hello';

// const arrayFromSomeStr = [...someStr];
// someStr.split('');
// Array.from(someStr);

// ========================================

const arr1 = ['hello'];
const arr2 = ['world'];

// const helloWorld = arr1.concat(arr2);
const helloWorld = [...arr1, ...arr2];

// const resArray = arr1;
// console.log(resArray === arr1); // true
// const resArray = [...arr1];
// console.log(resArray === arr1); // false

// ======================================

// filter & reduce

const numberArray = [2, 4, 15, 26, 76, 99, 100];

const filteredNUmberArray 
   = numberArray.filter((el, index, curArray) => el > 26 && el);

const sumAllNumberArray 
   = numberArray.reduce((sum, cur, index, curArray) => {
        sum += cur;
        return sum;
   }, 0);

// { sum: 322, source: [] }

// const objFromArray = numberArray.reduce((res, cur) => {
//     res.sum += cur;
//     return res;
// }, { sum: 0, source: [...numberArray]})

// const objFromArray = numberArray.reduce((res, cur) => {
//     res.sum += cur;
//     res.source.push(cur + '!')
//     return res;
// }, { sum: 0, source: []})



