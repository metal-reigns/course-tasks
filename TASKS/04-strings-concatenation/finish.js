/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

 const myName = 'Anton'
 const mySecondName = 'K'
 const myProffession = 'programmer'

 const dataPerson = `Меня зовут ${myName} ${mySecondName} и я ${myProffession}`
 console.log(dataPerson)

 const personInfo = 'My name is ' + myName + '' + mySecondName + ' and I am ' + myProffession
 console.log(personInfo)
