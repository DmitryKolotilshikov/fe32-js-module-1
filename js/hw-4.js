/* // Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. */
function getSum(num) {
  let res = 0;
  for (let i = 0; i <= 100; i++) {
    res = res + i;
  }
  return (res);
}
console.log(getSum(100))

/* // Task 2 
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту: */
function sumOverpaymentCredit(sumCredit) {
  let loanTermToMonths = 60
  let overpaymentAmount = 0
  let interestRateYear = 17 / 12;

  while (sumCredit > 0) {
    let overpaymentAmountToMonths = sumCredit * interestRateYear.toFixed(2) / 100;
    let monthlyPayment = sumCredit / loanTermToMonths--;
    sumCredit = sumCredit - monthlyPayment;
    overpaymentAmount = overpaymentAmount + overpaymentAmountToMonths;
  }
  return (overpaymentAmount)
}
console.log(sumOverpaymentCredit(100000000000))


/* // Task 3 
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту: */
function trimString(string, before, after) {
  return (string.slice(before, after))
}
console.log(trimString('Привет', 2, 4))


// Task 4 computer
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// Для 2021 это будет 5.
function getSumNumbers(num) {
  let strNum = String(num)
  let res = 0
  for (let litter of strNum) {
    res = res + Number(litter)
  }
  return (res)
}
console.log(getSumNumbers(2021))

/* // Task 5 computer
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее.Если два числа равны, верните a или b. */
function getSum(a, b) {
  let res = 0;
  for (let i = a; i <= b; i++) {
    res = res + i;
  }
  return (res)
}
console.log(getSum(-500, 600))


/* Task 6 computer
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

  булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo */
function fooboo(bolean, foo, boo) {
  foo = () => { console.log('foo') };
  boo = () => { console.log('boo') };
  if (bolean === true) {
    foo()
  } else {
    boo()
  }
}
console.log(fooboo(true))