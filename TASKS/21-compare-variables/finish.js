/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

const compare = parseInt(myVariable1) <= parseInt(myVariable2)

console.log(compare)

myVariable1 = '20'
myVariable2 = 100

const compare2 = +myVariable1 <= +myVariable2

console.log(compare2)

let a = true //1
let b = false //0

console.log(+a)

