/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

const a = setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)

console.log(a) // Ошибка из-за использования функционального выражения (function и имя myFn)

function myFn () {
  console.log(setTimeout('Hello'), 2000)
}

myFn() // 'ERR_INVALID_CALLBACK'

setTimeout(()=> {console.log('Привет из функции myFn')}, 2000) // correct

function myFn() {
  console.log('Привет из функции myFn')
}

setTimeout(myFn, 2000) // с задержкой

myFn() // без её

setTimeout(function () {
  console.log('Hello')
}, 2000) // correct