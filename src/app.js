'use strict';

/*
 * Spread массивов - массив чисел + add + Math.min или max
 */

// const numbers = [1, 2, 3, -7, 8, -19];

// console.log(Math.min(...numbers));

// const numbers = [1, 2, 3, 4, 5];

// const copyOfNumbers = numbers.slice();
// const copyOfNumbers = [...numbers];

// console.log(numbers === copyOfNumbers);
// console.log(copyOfNumbers);

/*
 * Spread обьектов
 */

/*
 * Spread обьектов - настройки пользователя default + update = settings
 */

// const defaultSettings = {
//   theme: 'light',
//   showNavbar: true,
//   isHidden: false,
// };

// const update = {
//   theme: 'dark',
//   showNavbar: false,
// };

// const currentSettings = Object.assign({}, defaultSettings, update);

// const currentSettings = {
//   ...defaultSettings,
//   ...update,
// };

// console.log(currentSettings);
/*
 * Деструктуризация объектов
 */

// const user = {
//   name: 'Mango',
//   room: 24,
// };

// const room = user.room;
// const type = user.type;
// const type = user.type;

// const { room, type, name } = user;
// const message = `Гость ${name} прибивает как ${type} в комнату ${room}`;
// console.log(message);

// const greeter = ({ room, type = 'regular', name } = {}) => {
//   // const { room, type = 'regular', name } = user;

//   return `Гость ${name} прибивает как ${type} в комнату ${room}`;
// };

// console.log(greeter(user));

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   address: {
//     name: 'Address name prop',
//     city: 'Zimbabwe',
//     country: 'Ukraine',
//     street: 'Some street',
//   },
// };

// const { name: profileName } = profile;

// console.log(profileName);

// const {
//   name,
//   email,
//   address: { city, country, street, name: addressName },
// } = profile;
// const { city, country, street } = address;

// console.log(addressName);
// console.log(profile.address.name)

// console.log(city);

/*
 * Деструктуризация массивов - показать пример с полями формы из elements
 */

// const form = document.querySelector('.form');

// const input = form.elements[0];
// const textarea = form.elements[1];
// const [input, textarea] = form.elements;

// console.log(input);

// console.log(textarea);

/*
 * Деструктуризация массивов - показать пример с перебором Object.entries
 */

// const tasks = {
//   ann: 30,
//   boris: 50,
//   valera: 99,
// };

// const entries = Object.entries(tasks);

// // console.table(entries);

// console.log(entries);

// for (const [name, value] of entries) {
//   // const name = entry[0];
//   // const value = entry[1];
//   console.log(name, value);
// }

// const numbers = [1, 2, 3, 4, 5];

// const [value1, ...rest] = numbers;

// console.log(value1, rest);

// const { a, ...rest } = { a: 1, b: 2, c: 3 };

// console.log(a);
// console.log(rest);

// const x = {
//   y: 5,
//   ...{ g: 6, i: 9 },
// };

// const fn = function(...rest) {};

// fn(...[1, 2, 3, 4, 5]);

// const gallery = ({
//   selector,
//   slides = [],
//   delay = 250,
//   activeSlide = 1,
// } = {}) => {};

// gallery({
//   selector: '.gallery',
//   slides: [],
//   delay: 200,
// });

