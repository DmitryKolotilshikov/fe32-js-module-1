// Task 1 
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

<<<<<<< HEAD
let x = 20
let y = 58
let z = 42
=======
const x = 20
const y = 58
const z = 42
>>>>>>> d1b0f2b309c2c8e407a111b352910c919ef540e9

let n = x + y + z
console.log(n)

// Task 2
// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

const seconds = 60
const minutes = 60
const hours = 24
const days = 365
let myAge = 30.9

let myAgeInSeconds = seconds * minutes * hours * days * myAge
console.log(myAgeInSeconds)

// Task 3
//     let count = 42
//     let userName = '42'
// Создайте две переменные.Поместите в них переменную count и превратите в строку,
//     а userName наоборот в число.Попробуйте реализовать задачу двумя разными способами.

let count = 42
let userName = '42'

// 1 способ
let _num = +userName
let _str = '' + count
console.log(_str)
console.log(_num)

// 2 способ
let _str2 = String(count)
let _num2 = Number(userName)
console.log(_str2)
console.log(_num2)

// 3 способ 
let _str3 = `${count}`
console.log(_str3)
let _num3 = parseInt(userName)
console.log(_num3)

// Task 4
// Имеется три переменные:

//   let a = 1
//   let b = 2
//   let c = "белых медведей"
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.
let a = 1
let b = 2
let c = 'белых медведей'
console.log(a + '' + b + ' ' + c)

// Task 5
// Создайте переменные и поместите в них нижеприведенные слова.
// Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

// - доступ
// - морпех
// - наледь
// - попрек
// - рубило
let d = 'доступ'
let e = 'морпех'
let f = 'наледь'
let g = 'попрек'
let h = 'рубило'
let lengthWords = (d.length + f.length + g.length + h.length + e.length)
console.log(lengthWords)

// Task 6 
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

// `Variable: %variable name% have type: %type variable%`

const N1 = 'Text'
const N2 = 10
let N3 = true
console.log(`N1: 'Text' have type: typeof`)
console.log(typeof N1)
console.log(`N2: '10' have type: typeof N2`)
console.log(typeof N2)
console.log(`N3: 'true' have type: typeof N3`)
console.log(typeof N3)
// В одну строку не получилось сделать(((


// Task 7
// Запросить у пользователя имя и возраст и вывести их в консоль.

const _user_name_ = prompt('Enter your name')
const _user_age_ = prompt(`Enter your age`)

console.log(_user_name_)
console.log(_user_age_)
