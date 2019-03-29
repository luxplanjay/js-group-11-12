'use strict';

// let counter = 0;

// while (counter < 5) {
//   console.log(counter);

//   counter += 1;
// }

// let userInput;

// do {
//   userInput = prompt('давай вводи число 10!');
//   console.log(userInput);
//   // Выполняем до тех пор пока не равно null и не равно 10
// } while (userInput !== null && Number(userInput) !== 10);

// Пишем условие ВЫПОЛНЕНИЯ
// userInput = null
// null !== null || Number(null) !== 10
// false || true -> true

// userInput = 10
// 10 !== null || Number(10) !== 10
// true || false -> true

// userInput = null
// null !== null && Number(null) !== 10
// false && true -> false

// userInput = 10
// 10 !== null && Number(10) !== 10
// true && false -> false

// ==================

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log('i: ', i);
//   // console.log(`numbers[${i}]:`, numbers[i]);

//   numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);

// ================================

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matrix.length; i += 1) {
//   console.group(`Iteration ${i}`);

//   console.log('i: ', i);
//   console.log(`matrix[${i}]: `, matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('j: ', j);
//     console.log(`matrix[${i}][${j}]: `, matrix[i][j]);
//   }

//   console.groupEnd(`Iteration ${i}`);
// }

// ================================

/*
 * Напиши скрипт, который проверяет произвольную строку
 * в переменной message и находит в ней самое длинное слово,
 * записывая его в переменную longestWord.
 */

// 1. Сделать из строки массив
// 2. Перебрать массив в цикле
// Переменная для хранения самого длинного слова и делаем предположение что самое длинное слово это первое
// на каждой итерации сравнить текущее и новое
// если новое больше текущего то перезаписать

// const message = 'May the force be with you';
// const words = message.split(' ');
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1) {
//   const currentWord = words[i];
//   const currentWordLength = currentWord.length;
//   const longestWordLength = longestWord.length;

//   if (currentWordLength > longestWordLength) {
//     longestWord = currentWord;
//   }
// }

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log(words);
// console.log(longestWord); // 'force'

// ===========================
// const message = 'qq www rrr eeee yy ttttt ';
// const words = message.split(' ');
// const max = words.length - 1;
// const leftCount = 4;
// const rightCount = 5;
// let target;

// for (let i = 1; i < max; i += 1) {
//   const prevElLength = words[i - 1].length;
//   const nextElLength = words[i + 1].length;

//   if (prevElLength === leftCount && nextElLength === rightCount) {
//     target = words[i];
//   }
// }

// console.log(words);
// console.log(target);
// =========================================

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('i: ', i);
//   console.log('clients[i]: ', clients[i]);
//   console.log('clientNameToFind: ', clientNameToFind);

//   if (clients[i] === clientNameToFind) {
//     message = 'Найден :)';
//     break;
//   }

//   message = 'Не найден :(';
// }

// console.log(message);

// =========================================

// const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.includes(3));

// const numberToFind = 13;

// let result = false;

// for (const number of numbers) {
//   if (number === numberToFind) {
//     result = true;
//     break;
//   }
// }

// console.log(result);

