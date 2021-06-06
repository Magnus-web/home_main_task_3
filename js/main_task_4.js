// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".



// let employees = {
//     mango: 100,
//     poly: 150,
//     alfred: 80,
// };
let employees = {
    kiwi: 200,
    lux: 50,
    chelsy: 150,
};

const countTotalSalary = function (employees) {
    let salaries = Object.values(employees);
    let totalSalary = 0;
    for (let salary of salaries) {
        totalSalary += salary;
    }
    return totalSalary;
};
console.log(countTotalSalary({})); // 0