// Task 1 💻
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

  function getSum(maxNum) {
    let sum = 0;
    for (let i = 0; i <= maxNum; i++) {
      sum += i;
    }
    return sum;
  }

  console.log (getSum(100));


// Task 2 💻
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

function getCreditDebt (creditSum, percents, years)
{
    return creditSum * percents / 100 * years;
}

console.log(getCreditDebt(1000, 17, 5));

// Task 3 💻
// Написать функцию trimString которая в качестве аргумента принимает три параметра:

// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

const string = 'I will learn js tomorrow';

function trimString (string, startIndex, lastIndex) {
  return string.slice(startIndex, lastIndex);
}

console.log (trimString(string, 0, 15));

// Task 4 💻
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// Для 2021 это будет 5.

// 1 способ:

  function getSumNumbers(num) {
    const figures = '' + num
    let sum = 0

    for (let i = 0; i < figures.length; i++) {
      sum += +figures[i]
    }
    return sum
  }

  console.log(getSumNumbers(3558));

  // 2 способ:
  function getSumNumbers(num) {
    let strNum = '' + num;
    let res = 0;
    for (let value of strNum) {
        res += +(value);
    }
    return res;
}

console.log (getSumNumbers(3558)); 


// Task 5 💻
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
// найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

  function getSum(a, b) {
    let sum = 0;
    for (i = a; i <=b; i++) {
      sum += i;     
    }
  return sum;
  }

  console.log(getSum(-5, 6));

// Task 6 💻
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true запускаем функцию foo иначе boo


 
  function fooboo(isFooFunc, fooFunc, booFunc ) {
    if (isFooFunc) {
      fooFunc()
    } else {
      booFunc()
    }
  }

  fooboo(true, () => { console.log('foo')}, () => { console.log('boo')} )
  fooboo(false, () => { console.log('foo')}, () => { console.log('boo')} )
 


// ADVANCED level
// Task 1 👨‍🏫
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, 
// если треугольник можно построить со сторонами заданной длины, 
// и false в любом другом случае.

  function isTriangle(a,b,c) {
    if ((b + c > a) && (a + c > b) && (a + b > c )) {
      console.log ('true');
    }
    else { console.log ('false');
  }
  }

  console.log(isTriangle(1,8,5));
  
  

