// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

let findProp = "price";

const getAllPropValues = function(arr,prop) {
    let arrProp = [];
        for (let value of arr) {
            let keys  = Object.keys(value);
                if (keys.includes(prop)) {
                    arrProp.push(value[prop])
                } else {
                    break;
                }
        }
    return arrProp;
}

console.log(getAllPropValues(products,findProp));
