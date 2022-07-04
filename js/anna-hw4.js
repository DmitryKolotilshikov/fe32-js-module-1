/* Task 1 💻
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. */

function getSum (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = result + i;
    }
    return console.log(result);
}
getSum(20);


/* Task 2 💻
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита 
который хочет получить клиент и верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается. */

const loan = (sum) => {
    const percent = sum * (17 / 100);
    const terms = 5;
    const totalSum = sum + percent * terms;
    const result = totalSum - sum;
    return console.log(result);
}
loan (10000);



/* Task 3 💻
Написать функцию trimString которая в качестве аргумента принимает три параметра:
строку
значение от
значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по */


function trimString (str, from, to) {
    let res = 0;
    res = str.slice(from,to);
    return console.log(res);
}
trimString ("Здравстсвуйте", 2, 5);


/* Task 4 💻
Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

Для 2021 это будет 5. */


function getSumNumbers (num) {
    let res = 0;
    while (num / 10 > 0) {
        const m = num % 10;
        res = res + m;
        num = Math.floor(num/10);
    }
    return console.log(res);
}
getSumNumbers(2021);


/* Task 5 💻
Написать функцию getSum которая принимает два целых числа a и b, 
которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, 
включая их, и вернуть ее. Если два числа равны, верните a или b. */

function getSum (a, b) {
    let res = 0;
    for (let i = a; i <= b; i++) {
        res = res + i;
    }
    return console.log(res);
    }
    getSum (-2, 3);


/* Task 6 💻
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo */

function fooboo(boolean, funcFoo, funcBoo) {
    if (boolean === true) {
    funcFoo ();
    } else {
    funcBoo ();
    }
    function funcFoo () {
        return console.log('foo') 
    };
    function funcBoo () {
        return console.log('boo') 
    };
}
fooboo(true); 