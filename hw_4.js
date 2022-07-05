//ex.1
function getSum (num) {
    let finalNumber = 0;
    for (let y=0; y<=0; y++) {
        finalNumber = finalNumber+y;
    }
    return console.log(finalNumber);
}

//ex.2
const bankMoney = (sum) => {
const persentage = sum * (17/100);
const howLong = 5;
const totalMoney = sum + persentage * howLong;
const result = totalMoney - sum;
return console.log(result);
}

//ex.3
function trimString (string, from, to) {
    let res = 0;
    res = str.slice(from,to);
    return console.log(res);
}

//ex.4
function getSumNumbers (num) {
    let res = 0;
    while (num / 10 > 0) {
        const m = num % 10;
        res = res + m;
        num = Math.floor(num/10);
    }
    return console.log(res);
}

//ex.5
function getSum (a, b) {
    let res = 0;
    for (let i = a; i <= b; i++) {
        res = res + i;
    }
    return console.log(res);
    }


//ex.6
function fooboo(boolean, funcFoo, funcBoo) {
    if (boolean === true) {
    funcFoo ();
    } else {
    funcBoo ();
    }
    function funcFoo () {
        return console.log('foo') 
    };
    function funcBoo () {
        return console.log('boo') 
    };
}
