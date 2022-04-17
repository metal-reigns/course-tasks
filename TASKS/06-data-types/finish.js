/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

 const myName = 'Anton'
 const myNumber = 28
 const myBoolean = true
 const myNull = null
 const myUndefined = undefined
 const myObject = {
     age: 28,
     name: 'Anton'
 }

 const myArray = ['Anton', 28, true, null, undefined, myObject]

 console.log(typeof myName)
 console.log(typeof myNumber)
 console.log(typeof myBoolean)
 console.log(typeof myNull)
 console.log(typeof myUndefined)
 console.log(typeof myObject)
 console.log(typeof myArray)

