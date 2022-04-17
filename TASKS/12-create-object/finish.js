/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
    name: 'Anton',
    surname: 'K',
    favoriteNumber: 21
}

const personInfo = `Меня зовут ${myObject.name} ${myObject.surname}, и моё любимое число - ${myObject.favoriteNumber}`

console.log(personInfo)

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА

const {name: n, surname: s, favoriteNumber: f} = myObject

console.log(`My name is ${n} ${s} and my favorite number is ${f}`)

let options = {
    title: "Меню",
    width: 100,
    height: 200
  };
  
 let {title, ...size} = options

 console.log(title, size)

