// - Псевдомассив arguments
// - Область видимости функции

/*
 * Функция сложения двух чисел
 */

// const add = function(x, y) {
//   const summ = x + y;

//   console.log('вызов функции add!');

//   return summ;
// };

// console.log('Результат 2 + 3: ', add(2, 3));
// console.log('Результат 5 + 5: ', add(5, 5));
// console.log('Результат 15 + 5: ', add(15, 5));

/*
 * Функция нахождения самого длинного слова в строке
 */

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord('Aenean imperdiet сras non dolor'));
// console.log(findLongestWord('Nullam vel'));
// console.log(findLongestWord('Aenean tellus metus bibendum'));

/*
 * Array.includes своими руками
 */
// const includes = function(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(includes([1, 2, 3], 4)); // false
// console.log(includes([1, 2, 3, 4, 5], 2)); // true
// console.log(includes(['mango', 'ajax', 'poly'], 'mango')); // true

/*
 * Функция рассчета стоимости гравировки https://codepen.io/goit-fe-adv/pen/WZRvgX?editors=0010
 */

/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// const calculatePrice = function(string = '', costPerWord = 10) {
//   const words = string.split(' ');
//   const total = words.length * costPerWord;

//   return total;
// };

// console.log(calculatePrice('Proin sociis natoque et magnis parturient', 10));
// console.log(calculatePrice('Vestibulum suscipit nulla quis', 20));
// console.log(calculatePrice('Nullam accumsan lorem in dui'));

/*
 * Параметры по умолчанию
 */
// const counter = function(initialvalue = 0, step = 1) {
//   // qweq
// };

// counter(3, 4);

/*
 * Передача по ссылке
 */
// const double = function(array) {
//   console.log('array arg: ', array);

//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * 2;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// double(numbers);
// console.log('numbers: ', numbers);

/*
 * Предикатные функции
 */

// const isEqual = function(a, b) {
//   return a === b;
// };

// console.log(isEqual(5, 2));
// console.log(isEqual(5, 5));

/*
 * Функция сложения произвольного кол-ва чисел
 */

// const add = function() {
//   let total = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

/*
 *
 */

// const add = function() {
//   // console.log(arguments);
//   let args = Array.from(arguments);
//   const mult = args[0];
//   args = args.slice(1);
//   // args.shift();

//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total * mult;
// };

// console.log(add(5, 1, 2, 3));
// console.log(add(10, 1, 2, 3, 4, 5));
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

/*
 *  Операция rest
 */

// const add = function(...args) {
//   console.log('args: ', args);
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// ======================

// const add = function(mult, ...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total * mult;
// };

// console.log(add(5, 1, 2, 3));
// console.log(add(10, 1, 2, 3, 4, 5));
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// Все данные передаем как аргументы
// не используем глобальные переменные
// const pricePerDroid = 5;

// const a = function(price, count) {
//   return price * count;
// };

// a(pricePerDroid, 5);

// =============

// const greeter = function(name) {
//   console.log('hello ' + name);
// };

// const name = prompt('имя давай');

// greeter(name);
