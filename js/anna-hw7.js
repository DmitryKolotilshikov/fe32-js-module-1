/* Task 1 🖥
Выведи все элементы массива в консоль с помощью метода forEach
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((el) => {
    console.log(el);
})

fibonacci.forEach(function fn (el) {
    console.log(el);
})


/* Task 2 🖥
Используя метод map создайте новый массив, на основе массива users, 
в котором каждый элемент массива будет содержать строку вида:
['member 1: Darya', 'member 2: Masha', ... etc]
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const usersSecondArray = users.map((el, index) => `member ${index}: ` + el);
console.log(usersSecondArray);

const usersSecondArray = users.map(function(el, index) {
    return `member ${index}: ` + el;
});
console.log(usersSecondArray);


/* Task 3 🖥
С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const numbers = [7, -4, 32, -90, 54, 32, -21];

const filteredNumbers = numbers.filter((el) => el >=0);
console.log(filteredNumbers);

const filteredNumbers = numbers.filter(function(el) {
    if (el >= 0) {
        return el; 
    }
});
console.log(filteredNumbers);


/* Task 4 🖥
Используя метод reduce получите сумму всех чисел массива.
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const SumOfNumbers = fibonacci.reduce((acc, cur) => {
    acc += cur;
    return acc;
}, 0);
console.log(SumOfNumbers);


const SumOfNumbers = fibonacci.reduce(function (acc, cur) {
    acc += cur;
    return acc;
}, 0); 
console.log(SumOfNumbers);


/* Task 5 🖥
Используя метод find найдите в массиве первое четное число.
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstEvenNumber = numbers.find((el) => el % 2 === 0);

const firstEvenNumber = numbers.find(function (el) {
    if (el % 2 === 0) {
        return el;
    }
})
console.log(firstEvenNumber);


/* ADVANCED level

/* Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
Примечание: для этой задачи y не считается гласной. */

function deleteVowel(str) {
    const strArr = str.split('');
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase();
      if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        strArr[i] = '';
      }
    }
    return strArr.join('');
  }
  console.log(deleteVowel("This website is for losers LOL!"));


/*   Task 4 👨‍🏫 Самый высокий и самый низкий
  В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
  и вы должны возвращать наибольшее и наименьшее число.
      highAndLow("1 2 3 4 5"); // return "5 1"
      highAndLow("1 2 -3 4 5"); // return "5 -3"
      highAndLow("1 9 3 4 -5"); // return "9 -5"
  Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
   при этом наибольшее число должно быть первым. */

const highAndLow = "1 2 3 4 5";

const min = Math.min(...highAndLow.split(" "));
const max = Math.max(...highAndLow.split(" "));
const resMaxAndMin = max + " " + min;
console.log(resMaxAndMin);


/* Task 5 👨‍🏫 Изограммы
Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case */

const checkIsogram = (str) => str.split("").every((a, b) => str.indexOf(a) == b);
console.log(checkIsogram("Ogogo"));
