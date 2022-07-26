// Task 1 

//Дан массив:

//    const colors = ['red', 'green', 'blue']

//Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
   console.log(colors.length);
    
   // Task 2 

   //Дан массив:
   
    //   const animals = ['monkey', 'dog', 'cat']
   
  // Выведите в консоль его последний элемент вне зависимости от его длинны.
   
  const animals = ['monkey', 'dog', 'cat']
  console.log(animals.slice(-1.1));

  // Task 3 
 
//Дан массив:

  //  const numbers = [5, 43, 63, 23, 90]

//Удалите все элементы в массиве и выведите в консоль полученный результат.

// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
console.log(delete (numbers));

//console.log(numbers.splice(0,-1));


// Task 4 
//Дан массив:

//    const students = ['Polina', 'Dasha', 'Masha']

//+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
//+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
//+ Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];
console.log(students.pop()); 
console.log(students.shift()); 

// Task 5 

//Дан массив:

 //   const cats = ['Gachito', 'Tom', 'Batman']

//Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman'];
cats.length
 for (let i = 0; i < cats.length; i++) {
  console.log('Cats is ', cats[i]);
 };

  //for (const value of cats) {
  //   console.log('Cats is ', value);
 //}


// Task 6 

//+ Соедините два массива чисел в один.
//+ В полученном массиве попробуйте найти индекс числа **`8`**


    const evenNumbers = [2, 4, 6, 8, 10];
    const oddNumbers = [1, 3, 5, 7, 9];
    const sumNumbers = evenNumbers.concat(oddNumbers);
    console.log(sumNumbers[8]);


    // Task 7 

   // Дан массив:
    
    //  const binary = [0, 0, 0, 0]
     
   // + Наш бинарный массив неполный, в нем явно не хватает единиц.
    //+ Превратите данный массив в строку.
    
    //> [0, 0, 0, 0] -> '0101010'
    
    const binary = [0, 0, 0, 0];
    const sbinary = binary.splice(1);
    const allbinary = sbinary.map((el)=>el +'1');
    const newbinary = allbinary.push('0');
    
    console.log(allbinary.join (''));

    // ADVANCED level

// Для решения задач используйте циклы **`for`** или **`for of`**

// Task 1 👨

//Реализуйте функцию которая будет проверять, является ли слово палиндромом.

isPalindrome = (string) => {
    if (string === string.split('').reverse().join('')) {
        console.log('is palindrome');
    }
    else {
        console.log('is not palindrome');
    }
}
 // isPalindrome(string);

// Task 2 

// Выведите в консоль среднее значение чисел в многомерном массиве.

    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
    let Sum = 0;
    let Elements = 0;
    
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            Sum += matrix[i][j];
            Elements++;
        }
    }
    
    console.log(Sum / Elements);

    // Task 3 👨

    //Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

   const result1 = mixedNumbers.filter((el) => el >= 0);
   console.log(result1);
   const result2 = mixedNumbers.filter((el) => el < 0);
   console.log(result2);

  