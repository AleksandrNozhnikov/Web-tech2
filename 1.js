/*Ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в
соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом 
(пример): Цельсий: 21, Фаренгейт: 69.8
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32*/


const a = Number.parseFloat(prompt('Введите температуру в градусах Цельсия'));
const b = a * 9 / 5 + 32;
alert((parseInt(b*100))/100);
alert(`Цельсий: ${a}, Фаренгейт: ${b}`);





