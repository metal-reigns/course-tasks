/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
  const a = 2
  console.log(a)
}

myFunction() //2

console.log(a) // a is not defined
// Переменная "а" доступна только внутри функции