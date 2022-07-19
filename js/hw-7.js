/* Task 1 desktop_computer
Выведи все элементы массива в консоль с помощью метода forEach */
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(value => console.log(value)) // arrow function


function getElements(el) {
  console.log(el)
}
fibonacci.forEach(getElements) //function declaration



/* Task 2 desktop_computer
Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида: ['member 1: Darya', 'member 2: Masha', ...etc] */
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let num = 1;
const newArrayusers = users.map(el => `member ${num++}: ${el}`);



/* Task 3 desktop_computer
С помощью метода filter создайте новый массив в котором не будет отрицательных чисел. */
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter(item => item >= 0); // arrow function


function getPositiveNumbers(el) {
  if (el >= 0) {
    return (el)
  }
}
const newArray = numbers.filter(getPositiveNumbers)
console.log(newArray) //function declaration



/* Task 4 desktop_computer
Используя метод reduce получите сумму всех чисел массива. */
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.reduce((sum, item) => {
    sum += item
    return (sum)
  }, 0) // arrow function


function getSum(sum, el) {
  sum += el
  return (sum)
}
const resSum = fibonacci.reduce(getSum) //function declaration



/* Task 5 desktop_computer
Используя метод find найдите в массиве первое четное число. */
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const OnePositiveNumbers = numbers.find(item => item % 2 == 0); // arrow function


function getPositiveNumbers(el) {
  el = el % 2 == 0
  return (el)
}
const res = numbers.find(getPositiveNumbers) //function declaration



// ADVANCED level
/* Task 1 man_teacher
Написать функцию конструктор Student
В каждом объекте студента должны быть поля salary, rate, name
Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.
Создать массив students и поместить в него студентов.
Написать функцию которая принимает массив студентов.И вычисляет общую сумму кредитов которую можно выдать группе.
rate имеет 4 категории A B C D
A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
D - плохой рейтинг и мы не можем дать кредит */

class Student {
  constructor(name, salary, rate) {
    this.name = name,
      this.salary = salary,
      this.rate = rate
  }
  getSumCredit() {
    let sumCredit
    switch (this.rate) {
      case 'A':
        return (sumCredit = this.salary * 12);
        break
      case 'B':
        return (sumCredit = this.salary * 9);
        break
      case 'C':
        return (sumCredit = this.salary * 6);
        break
      default:
        return (0);
        break
    }
  }
}
const userEvgeniy = new Student('Evgeniy', 2000, 'A');
const userDiana = new Student('Diana', 1500, 'A');
const userPolina = new Student('Polina', 1000, 'B');
const userKarina = new Student('Karina', 1000, 'B');
const userEva = new Student('Eva', 1000, 'C');
const userLena = new Student('Lena', 800, 'C');
const userKlava = new Student('Klava', 500, 'D');
const userIvan = new Student('Ivan', 200, 'D');

const students = [userEvgeniy, userDiana, userPolina, userKarina, userEva, userLena, userLena, userKlava, userIvan];
students.map(el => el.getSumCredit()).reduce((sum, el) => sum + el, 0)


/* Task 2 man_teacher Тролли атакуют наш раздел с комментариями!!! */
function strReplace(str) {
  return (str.toLowerCase().replace(/i|e|o|u|a/g, ''));
}
strReplace('This website is for losers LOL!');


/* Task 3 man_teacher Нет истории, нет теории
В приведенных ниже примерах показано, как написать функцию: */
const accum = (str) => {
  const strUpArr = str.toUpperCase().split('');
  return (strUpArr.map((el, index) => el + el.toLowerCase().repeat(index)).join('-'));

};
accum("abcd");



/* Task 4 man_teacher Самый высокий и самый низкий
В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число. */
function getMinMaxValue(str) {
  let strReplace
  for (let l of str) {
    strReplace = str.replace(/-`${l}`/g, `-${l}`)
  }
  strReplaceSort = strReplace.split(' ').sort();
  const minVAlue = strReplaceSort[0];
  const maxVAlue = strReplaceSort[strReplaceSort.length - 1];
  return (maxVAlue + ' ' + minVAlue);
}
getMinMaxValue("1 2 3 4 5");
getMinMaxValue("1 2 -3 4 5");
getMinMaxValue("1 9 3 4 -5");