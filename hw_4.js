// Task 1 💻
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
const getSum = (number) => {
    let result=0;
    for (let i = 0; i <= number; i++) {
       result = result + i; 
    }
    return result;
}
console.log (getSum(100));

// Task 2 💻
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

const creditSum = (sum) =>
    {
    const percent = 0.17;
    const years = 5;
    let overpayment = sum * years * percent;
    return overpayment;
 }
console.log (creditSum(5000));

// Task 3 💻
// Написать функцию trimString которая в качестве аргумента принимает три параметра:

// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

const trimString = (str,b,c) => {
let trim = str.slice (b,c)
return trim;
}
console.log (trimString('Anything', 1, 3));


// Task 4 💻
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

