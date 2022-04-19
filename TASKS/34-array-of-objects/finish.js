/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Ford',
        price: 10000,
        isAvailableForSale: true,
    },
    {
        carBrand: 'Opel',
        price: 11000,
        isAvailableForSale: false,
    },
    {
        carBrand: 'BMW',
        price: 1000,
        isAvailableForSale: true,
    }]

  const newCar = {
    carBrand: 'Nissan',
    price: 9000,
    isAvailableForSale: false,
    }

    cars.push(newCar)

    console.table(cars)

    console.log(cars[1].carBrand)