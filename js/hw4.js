
// Task 1 

//Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 

// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)


function getSum(num){
    let res  = 0;
    for (let i = 0; i <= num; i++) {
        res += i; 
    console.log('res: ', res, 'i: ', i);
    }
    return console.log(res);
}
getSum(100);

// Task 2 

//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

//+ процентная ставка в год — 17%,
//+ количество лет — 5.

// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

const payment = (salary) => {
    const credit = 150;
    const bid = 1.17;
    const year = 5;

    const result = salary - (credit * bid * year);
    return console.log(result);
}

payment (1000);

//Task 3 

//Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
//+ строку
//+ значение от
//+ значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по



function trimString(text){
        const valueFrom = 5;
        const valueUpTo = -9;
        const ist = (text.slice(valueFrom , valueUpTo));
        return console.log(ist)  
    }

    trimString('Пошла за пирожками и пропала');
    
    
    // Task 4 

   // Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
   //    Для 2021 это будет 5.
    
   function getSumNumbers(num){
    let str = String(num);
    let arr = str.split('');
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return console.log(sum);
    }
    getSumNumbers(2021);


    // Task 5 

// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.


   // getSum(1, 0) == 1   // 1 + 0 = 1
   // getSum(1, 2) == 3   // 1 + 2 = 3
  //  getSum(0, 1) == 1   // 0 + 1 = 1
   // getSum(1, 1) == 1   // 1 Since both are same
   // getSum(-1, 0) == -1 // -1 + 0 = -1
  //  getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum(a, b){
    let res = 0;
    for (let i = a; i <=b; i++) {
        res = res + i;
    }
    return (res);
}
console.log(getSum (1, 2));

// Task 6 

//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

//+ булевое значение
//+ функцию **foo** которая выводит в консоль свое имя
//+ функцию **boo** которая выводит в консоль свое имя

// Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**


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