//Основы js п.2.8.-2.14.
//п.2.8.
//ex.1
let a=1, b=1;
let c= ++a;
let d= b++;
alert (c,d);

//ex.2
let e = 2;
let f = 1+(a*=2);
alert(f);

//ex.4
let g = prompt ("Первое число?", 1);
let h = prompt ("Второе число?", 2);
alert (+g + +h);

//п.п.2.10.; ex.1
const jsName = prompt ("Какое 'официальное' название JavaScript?", '' );
if (jsName == "ECMAScript") {
    alert ('Верно!');
} else {
    alert ('Не знаете? ECMAScript!')
};

//ex.2
const number = prompt ("Введите число", '');
if (value > 0) {
    alert (1);
} if (value < 0) {
    alert (-1);
} if (value = 0) {
    alert (0);
}

//ex.3
const result = (a + b < 4) ? 'Мало' : 'Много';

//ex.4
let login = prompt ('Введите логин', '');
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

