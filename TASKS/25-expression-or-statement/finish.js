/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// ? expression statement
15 

// statement
const myObject = { // expression
  x: 10,
  y: true,
}

// expression statement
myObject.z = 'abc' // expression

delete myObject.x // expression statement

let newVariable // statement

// expression statement
newVariable = 30 + 5 // expression

// expression statement
console.log(newVariable) // expresion
//stateman
if (newVariable > 10) { 
// expression
  console.log(`${newVariable} больше 10`) // expression
}

/**
 *  Выражение - это часть кода, которое возвращает определенное значение,
 * например вызов функции, арифметическая операция, та часть кода, результат которой
 * мы используем для присваивания новой переменной или же в вызове функций
 * Инструкция - это часть кода, которое выполняет какое-либо действие, например
 * цикл, условная инструкция
 * Выражение-инструкция - это выражение, которое нахожится на отдельной строке кода 
 */