/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false) // 3

console.log(true && null && 10) // <- null
console.log(true && 'abc' && 10) // <- 10

console.log(3 && true || false) // true
console.log(3 && true && false) // false


/**
 * Ассоциативность left to right
 * Step 1 - (true && null) - null
 * Step 2 - 3 || null || false - 3
 * 
 * Оператор короткого замыкания или возвращает первое правдивое значение
 * Оператор короткого замыкания и возвращает первое ложное значение
 */