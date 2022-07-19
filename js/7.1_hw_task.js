/* Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен (, если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.

    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))((" 
*/

const transform = (str) => {
    const strArr = str.toLowerCase().split('');

    const objStr = strArr.reduce((res, currentValue) => {
        if (currentValue in res) {
            res[currentValue] += 1;
        } else {
            res[currentValue] = 1;
        }
        return res;
    }, {});

    return strArr.map(el => objStr[el] > 1 ? ')' : '(').join('');
}

console.log(transform('Success'))
console.log(transform('(( @'))