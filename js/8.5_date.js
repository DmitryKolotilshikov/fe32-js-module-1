// Date  (object)

const dateNow = new Date();

new Date(0) // 1 JAN 1970
new Date().getTime()  // позволяет получить таймстамп (timestamp)
Date.now() // позволяет быстро получить таймстамп (timestamp)

// timestamp - это число в миллисекундах прошедших с 1 января 1970 года.

// const someDate = new Date('2019-04-23');

// new Date(year, month, date, hours, min, sec, ms)

// const someDate = new Date(2019, 0, 23, 12)

// методы Date

// dateNow.getFullYear()
// dateNow.getMonth()  0 (Январь) и т.д
// dateNow.getDate() 
// dateNow.getHours()
// dateNow.getMinutes()
// dateNow.getSeconds()
// dateNow.getMilliseconds()
// dateNow.getDay()  // 0 (воскресенье) и так далее

// getFullYear vs setFullYear etc

// Date parse - парсит дату из строки

const stringDate = '2019-02-26T13:52:50.417-07:00'

const parseDate = new Date(Date.parse(stringDate));

// =====================================

const getWeekDay = (date) => {
    const DAYS = ['ВС', 'ПН', 'ВТ', 'CР', 'ЧТ', 'ПТ', 'СБ'];

    return DAYS[date.getDay()];
}

getWeekDay(new Date(2021, 6, 17))

// ===============================