/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */


for (message = 0; message < 6; message++){
    console.log(`Сообщение номер ${message}`)
}

setInterval(() => console.log('Сообщение номер'), 2000)

// 

let i = 1

const messageIntervalId = setInterval(() => {
    console.log(`Сообщение номер ${i}`)
    i += 1
}, 2000)

setTimeout(() => clearInterval(messageIntervalId), 12000)
