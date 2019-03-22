'use strict';

/*
 * Логические операторы
 */
// const min = 10;
// const max = 30;
// const value = 25;

// const isInRange = value > 10 && value < 30; // false

// const isInRange = value < 10 || value > 30;

// console.log(isInRange);
// //

// console.log(0 || null || 3 || 5);

// 1 && 0 && 2

// console.log(1 && 2 && 3 && 4 && false && 6);

// console.log(1 && null && 2);

// console.log(false && true);

// const isAfk = true;
// const isActive = true;

// const passed = !isAfk && isActive;

// не афк && активные

/*
 * Ветвления
 */

// const min = 10;
// const max = 30;
// const value = 125;
// let message;

// const isInRange = value > 10 && value < 30;

// if (isInRange) {
//   message = 'Number is in range!!!! Awesome!';
// } else {
//   message = 'Number is not in range!!!! Booooo!';
// }

// console.log(message);

// ==========
// const min = 10;
// const max = 30;
// const value = 1125;
// let message;

// if (value < 10) {
//   message = 'Less then 10';
// } else if (value > 20 && value < 50) {
//   message = 'Greater then 20 and less then 50';
// } else if (value > 60 && value < 80) {
//   message = 'Greater then 60 and less then 80';
// } else {
//   message = ':(';
// }

// console.log(message);

/*
 * Ternary
 */

// const isActive = true;

// let message;

// if (isActive) {
//   message = 'Active!';
// } else {
//   message = 'Inactive!';
// }

// console.log(message);

// const message = isActive ? 'Active' : 'Inactive!';

// console.log(message);

/*
 * Scope
 */

// const a = 5;

// if (15 > 10) {
//   console.log(a);
//   const message = 'Hello!';
// }

// console.log(message);

/*
 * Switch
 */

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const promptLabel = `Выбери опцию доставки: ${TAKEOUT} - самовывоз, ${COURIER} - курьер, ${POST} - почта`;
// let userChoise = prompt(promptLabel);
// let message;

// if (userChoise === null) {
//   message = 'Очень жаль, приходите еще';
// } else {
//   userChoise = Number(userChoise);

//   switch (userChoise) {
//     case TAKEOUT:
//       message = 'Ну и вывози сам, жлоб!';
//       break;

//     case COURIER:
//       message = 'Супер, за лишние деньги тебе все доставят!';
//       break;

//     case POST:
//       message = 'Посылка придет завтра!';
//       break;

//     default:
//       message = 'Ничего не выбрано!';
//   }
// }

// console.log(message);

// ======== Task 6
// const result = prompt('');

// if (result === null) {
//   console.log('null');
// } else if (Number.isInteger(Number(result))) {
//   console.log('int');
// } else {
//   console.log('rest');
// }

// Number(result) % 1 === 0

