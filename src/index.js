'use strict';

const products = [
  { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
  { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
  { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];

const users = [
  { id: 'id-1', name: 'Mango', isActive: true },
  { id: 'id-2', name: 'Poly', isActive: false },
  { id: 'id-3', name: 'Ajax', isActive: true },
  { id: 'id-4', name: 'Chelsey', isActive: false },
];

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const numbers = [1, 2, 3, 4, 5];

const log = array => console.table(array);

// Sort
// const sortedPlayers = [...players].sort((prev, next) => {
//   // по возрастанию значения свойства
//   // return prev.rank - next.rank;

//   // по убыванию значения свойства
//   return next.rank - prev.rank;
// });

// log(sortedPlayers);

/*
 * filter
 */

// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// };

// log(filter(numbers, number => number > 2));
// log(filter(numbers, number => number < 3));

/*
 * find
 */

// const find = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       return array[i];
//     }
//   }
// };

// log(find(numbers, number => number < 3));
// log(find(players, player => player.id === 'id-2'));

/*
 * reduce
 */

// const reduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i += 1) {
//     accumulator = callback(accumulator, array[i]);
//   }

//   return accumulator;
// };

// const total = reduce(numbers, (acc, num) => acc + num, 0);
// console.log(total);

// const totalQunatity = reduce(
//   products,
//   (acc, product) => acc + product.quantity,
//   0,
// );
// console.log(totalQunatity);

/*
 * ТАК ДЕЛАТЬ НЕНАДО - ДЛЯ ПРИМЕРА!!!!
 */
// Array.prototype.customReduce = function(callback, initialValue = array[0]) {
//   console.log('this: ', this);
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i]);
//   }

//   return accumulator;
// };

// console.log([]);
// console.log([1, 2, 3, 4, 5].customReduce((acc, num) => acc + num, 0));

/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 2);
// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .sort((a, b) => a - b);

console.log(result);

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.table(onlineAndSorted);
