// NORMAL level
// Task 1 💻
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

    // let x = 20
    // let y = 58
    // let z = 42


    let x = 20;
    let y = 58;
    let z = 42;

    console.log(x+y+z);

// Task 2 💻
// Создайте переменные:

// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

    const secInMin = 60;
    const minInHour = 60;
    const hourInDay = 24;
    const dayInYear = 365;
    const myAge = 30;

    const myAgeInSeconds = myAge*dayInYear*hourInDay*minInHour*secInMin;
    console.log (myAgeInSeconds);

    

// Task 3 💻
//     let count = 42
//     let userName = '42'
// Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

    //    1 путь:
       const count = 42;
       const userName = '42';

       const countToString = ' ' + count;
       const userNameToNumber = + userName;
       console.log (countToString);
       console.log (userNameToNumber);
       console.log (typeof(countToString));
       console.log (typeof (userNameToNumber));

    //    2 путь:
        // const count = 42;
        // const userName = '42';

        // const countToString = `${count}`;
        // const userNameToNumber = Number(userName);
        // console.log (countToString);
        // console.log (userNameToNumber);
        // console.log (typeof(countToString));
        // console.log (typeof (userNameToNumber));
       
// Task 4 💻
// Имеется три переменные:

//   let a = 1
//   let b = 2
//   let c = "белых медведей"
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.

     const a = 1;
     const b = 2;
     const c = "белых медведей";

     const firstString = a.toString();
     const secondString = b.toString();


     console.log (firstString+secondString + ' ' +c);


// Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

// - доступ 
// - морпех
// - наледь
// - попрек
// - рубило

    const firstWord = 'доступ';
    const secondWord = 'морпех';
    const thirdWord = 'наледь';
    const fourthWord = 'попрек';
    const fifthWord = 'рубило';

    const lengthWords = firstWord+secondWord+thirdWord+fourthWord+fifthWord;
    console.log (lengthWords.length);

// Task 6 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

// `Variable: %variable name% have type: %type variable%`

    const string = '10';
    const number = 10;
    let isTrue = true;

    console.log(`Variable: string have type: string`);
    console.log(`Variable: number have type: number`);
    console.log(`Variable: isTrue have type: boolean`);


// Task 7 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

    const enterName = prompt('Введите ваше имя');
    const enterAge = prompt ('Введите ваш возраст');

    console.log (enterName);
    console.log (enterAge);