/** ЗАДАЧА 24 - Альтернативные бинарные операторы
 *
 * В каждом выражении замените два оператора на один бинарный
 */

let a = 10

a += 1
console.log(a) // 11

a *= 2
console.log(a) // 22

a -= 5
console.log(a) // 17

a /= 2
console.log(a) // 8.5

a /= a / 2
console.log(parseFloat(a)) // 2 wtf?
