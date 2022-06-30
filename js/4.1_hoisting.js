// Hoisting (всплытие)

greet();

function greet() {   // при инициализации скрипта функция всплывает вначала скрипта
    console.log("Hoisting!");
}

greet3();  // функция не всплывает
const greet3 = () => console.log('NOT Hoisting!');
