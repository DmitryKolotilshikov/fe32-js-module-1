//ex.1
const text = 'true';
const or = false;
const numbers = 17;
const defy = undefined;
const nothing = null;
console.log(typeof text);
console.log(typeof or);
console.log(typeof numbers);
console.log(typeof defy);
console.log(typeof nothing);

//ex.2
const height = 15;
const width = 20;
console.log(height && width);

//ex.3
for (let i = 0; i <= 20; ++i){
    if (i%3 === 0) {console.log(i);}
}

//ex.4
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = (key && documents && pen && (apple||orange));
console.log(shouldGoToWork);

//ex.5
const enterNumber = prompt ('Введите число', '');
if (enterNumber%5==0) {
    console.log('Fiz');
} else if (enterNumber%3==0) {
    console.log('Buz');
} else if (enterNumber%5==0 && enterNumber%3==0){
    console.log('FizBuz');
};

//ex.6
const enterAge = prompt ('Сколько тебе лет?', '');
if (enterAge>18) {
    alert ("Попей пивка")
} else if (enterAge<18) {
    alert ("Пей колу")
} if (enterAge <= 18 && enterAge>=16){
    alert ('Можешь выкурить сигаретку, только маме не говори.')
};

//ex.7
const world = prompt ('В какую сторону света планируете отправиться?', '');
switch (world) {
    case 'юг':
        alert ('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert ('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert ('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert ('на восток пойдешь разработчиком станешь');
        break;
}
