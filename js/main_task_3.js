// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".


// let employees = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
// }; 
// let employees = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
// };
// 
let employees = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}; 

const findBestEmployee = (employees) => {

    let employeesProductivity = Object.values(employees);
    let maxProductivity = Math.max(...employeesProductivity);

    for (let key in employees) {
        if (maxProductivity === employees[key]) {
            return `${key}`
        }
    }
};
console.log(findBestEmployee(employees));