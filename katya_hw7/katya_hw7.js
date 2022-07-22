/*Task 1 desktop_computer
Выведи все элементы массива в консоль с помощью метода forEach

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function*/

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    /*function declaration*/

    function getElements(elem) {
      console.log(elem);
    }

    fibonacci.forEach(getElements);


    /*arrow function*/

    fibonacci.forEach(elem => console.log(elem));




/*Task 2 desktop_computer
Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

['member 1: Darya', 'member 2: Masha', ... etc]

        const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow function.*/

    /*function declaration*/

      const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

            function createArray(arr) {
                  return arr.map((el, index) => `member ${index+1}: ${el}`);
            }

            console.log(createArray(users));

    /*arrow function*/

    const createArrayMap = (arr) => arr.map((el, index) => `member ${index+1}: ${el}`)

    console.log(createArrayMap (users));




/*Task 3 desktop_computer
С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

    const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow function.*/

 
    const numbers = [7, -4, 32, -90, 54, 32, -21];

    /*function declaration*/

    function filterArray(arr) {
      return arr.filter(num => num >= 0)
    }

    console.log(filterArray(numbers));

    /*arrow function*/

    const filterArrow = (arr) => arr.filter(num => num >= 0);
    console.log(filterArrow(numbers));


/*Task 4 desktop_computer
Используя метод reduce получите сумму всех чисел массива.

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function.*/

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    /*function declaration*/

    function calcSum(arr) {
      return arr.reduce((sum, current) => sum+current, 0);
    }

    console.log(calcSum(fibonacci));


    /*arrow function*/

    const calcSum = (arr) => arr.reduce((sum, current) => sum+current, 0);

    console.log(calcSum(fibonacci));

/*Task 5 desktop_computer
Используя метод find найдите в массиве первое четное число.

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
Реализуйте решение двумя способами, используя function declaration & arrow function.*/

      /*function declaration*/

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

    function findEvenNumbers(arr) {
      return arr.find(num => num%2 == 0)
    }

    console.log(findEvenNumbers(numbers));

    /*arrow function*/

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

    const findEvenNumbers = (arr) => arr.find(num => num%2 == 0)

    console.log(findEvenNumbers(numbers));

