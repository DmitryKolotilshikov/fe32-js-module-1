// NORMAL level

// Task 1 

// Выведи все элементы массива в консоль с 
//помощью метода **`forEach`**
//> Реализуйте решение двумя способами, 
//используя `function declaration` & `arrow function`


 const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// fibonacci.forEach(function(el){
 //   console.log(el);
 //});

 const elfibonacci = fibonacci.forEach(function(el)
 {console.log(el)});

 // Task 2 

//Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

//> ['member 1: Darya', 'member 2: Masha', ... etc]
//> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

    //const newuser = users.map((el)=> el);
    function map(users){ return (el)};
    console.log(users);


    // Task 3 

//С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

//> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const numbers = [7, -4, 32, -90, 54, 32, -21];

 
   // const newnumbers = numbers.filter(function(number){return number > 0});
   // console.log (newnumbers);

const newnumbers1 = numbers.filter((el)=> el>0);
console.log(newnumbers1);

// Task 4 

//Используя метод **`reduce`** получите сумму всех чисел массива.

// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const fibonachi = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

   // const resfibonachi = fibonachi.reduce(function(sum, current){
   //     return sum + current;},0);
   //     console.log(resfibonachi);

    const sumfibonachi = fibonacci.reduce((total, namber)=> total + namber);
    console.log(sumfibonachi);

    // Task 5 

//Используя метод **`find`** найдите в массиве первое четное число.

// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
   // const number1 = number.find((el)=>el%2==0);
   // console.log(number1);
   
    const namber2 = number.find(function(el){
        return el%2==0});
     console.log(namber2);   
    



