/* // Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. */
function getSum(num) {
  let res = 0;
  for (let i = 0; i <= num; i++) {
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


// ADVANCED level
// Task 2 man_teacher
// Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.Каждый квадрат имеет размер 1 x1 и не может быть разбит.Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

// Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.

// Если входные данные недействительны, вы должны вернуть 0(поскольку надломы не требуются, если у нас нет шоколада для разделения).Ввод всегда будет неотрицательным целым числом.
function minSumFractures(enterWidth, enterHeight) {
  let minSumFractures = 0
  if ((enterHeight && enterWidth) >= 1) {
    let collFracturesHeight = Math.ceil((enterHeight / 2))
    let collFracturesWidth = Math.ceil(enterWidth / 2)
    if (collFracturesHeight <= collFracturesWidth) {
      minSumFractures = collFracturesWidth
    } else if (collFracturesHeight => collFracturesWidth) {
      minSumFractures = collFracturesHeight
    }
  } else if ((enterHeight && enterWidth) <= 1) {
    minSumFractures = 0
  }
  return (minSumFractures)
}
console.log(minSumFractures(1, 3))


// Task 3 man_teacher
// Напишите программу для вычисления общей стоимости покупки телефонов.Вы будете продолжать покупать телефоны(подсказка: циклы!), пока у вас не закончатся деньги на банковском счете.Вы также будете покупать аксессуары для каждого из телефонов.
const userName = prompt('Привет как тебя зовут?');
const otvetUserName = confirm(`Очень приятно ${userName}, Вы желаете приобрести Apple Iphone 13Pro оптом?`);
const sumMob = 800;
const sumAcs = 25;
const tax = 5;


if (otvetUserName === true) {
  let otvetPocupki = confirm(`${userName }, стоимость Apple Iphone 13Pro составляет 850$`);
  if (otvetPocupki === true) {
    const otvetAcsis = prompt(`${userName}, какой аксесуар желаете добавить?`, 'Введите чехол, зарядное, защитное стекло');
    switch (otvetAcsis) {
      case 'чехол':
        alert(`${userName}, Стоимость чехла 15$`);
        break
      case 'зарядное':
        alert(`${userName}, Стоимость чехла 15$`);
        break
      case 'защитное стекло':
        alert(`${userName}, Стоимость чехла 15$`);
        break
      default:
        prompt(`${userName}, попробуйте еще раз`);
    }
  } else {
    alert('Вы отменили действие, попробуйте снова!');
  }
} else {
  alert(`До скорых встреч ${userName }`);
}


const sumOfBank = prompt(`${userName}, укажите на какую общую сумму в долларах США Вы желаете приобрести мобильные телефоны и аксесуары?`);
const sumShop = function(sumOfBank) {
  let kalcMobTelAcs = 0;
  const sumTax = ((sumMob + sumAcs) * tax) / 100
  for (let i = 0; i <= sumOfBank; i++) {
    sumOfBank = sumOfBank - (sumMob + sumAcs + sumTax);
    kalcMobTelAcs = i
  }
  return (kalcMobTelAcs);
}
alert(`На данную сумму, c учетом налога (5%) Вы можете приобрести ${sumShop(sumOfBank)} модел(ей) мобильного телефона Apple Iphone 13Pro и чехлов к ним.`);


const kalcMobTelAcs = prompt(`Укажите сколько Вы жеkаете приобрести мобильных телефонов?`);
let sumOfShop = (sumMob + sumAcs) * kalcMobTelAcs
const sumOfTax = sumOfShop * 7 / 100
sumOfShop = sumOfShop + sumOfTax
alert(`Общая сумма, приобретенных ${kalcMobTelAcs} мобильных телефонов и чехлов к ним, составляет ${sumOfShop}$`)
if (sumOfBank < sumOfShop) {
  alert(`У Вас не достаточно денежных средств для покупки ${kalcMobTelAcs} мобильных телефонов и чехлов к ним`)
} else {
  alert('Приступить к оформлению?')
}