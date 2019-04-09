'use strict';

// const onGeolocationSuccess = function(position) {
//   console.log('in onGeolocationSuccess: ', position);
// };

// const onGeolocationError = function(error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGeolocationSuccess,
//   onGeolocationError,
// );
// 1 - выполнится успешно
// 2 - выполнится с ошибкой

// =====================================

// const labels = [];

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// const createLabel = function(index) {
//   labels.push(`Label ${index + 1}`);
// };

// repeat(5, createLabel);

// console.log(labels);

// const filter = function(array, testCallback) {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 3;
//   }),
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 4;
//   }),
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 10;
//   }),
// );

// console.log(
//   filter(['Etiam', 'iaculis', 'nunc', 'ac'], function(word) {
//     return word.length >= 5;
//   }),
// );

// =========================================

// const filter = (array, testCallback) => {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 3;
//   }),
// );

// console.log(filter([1, 2, 3, 4, 5], number => number >= 3));

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 4;
//   }),
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 10;
//   }),
// );

// console.log(
//   filter(['Etiam', 'iaculis', 'nunc', 'ac'], word => word.length >= 5),
// );

//==============
// // Global
// // Parent: null

// // [[Environmet]]: Global
// const fn = function(a) {
//   // Fn env
//   // Parent: Global
//   // a: 5

//   const b = 10;
//   // Fn env
//   // Parent: Global
//   // a: 5, b: 10

//   console.log(b);

//   // [[Environmet]]: Fn env
//   const innerFn = function(v) {
//     // innerFn env
//     // Parent: Fn env
//     // v: 10

//     console.log(superglobal);
//   };
//   // Fn env
//   // Parent: Global
//   // a: 5, b: 10, innerFn: f

//   innerFn(10);
// };

// // Global
// // Parent: null
// // fn: f

// const superglobal = 555;

// // Global
// // Parent: null
// // fn: f, superglobal: 555

// fn(5);
// =================
// // Global
// // Parent: null

// // [Environment]: Global
// const fnA = function() {
//   // fnA env
//   // Parent: Global

//   console.log(a);
// };
// // Global
// // Parent: null
// // fnA: f

// // [Environment]: Global
// const outerFn = function() {
//   // outerFn env
//   // Parent: Global

//   fnA();
// };

// const a = 5;

// // Global
// // Parent: null
// // fnA: f, outerFn: f, a: 5

// outerFn();

// =========================
// Global
// parent: null

// // [environemnt]: Global
// const fn = function() {
//   // fn env
//   // Parent: Global
//   console.log(a);
// };

// const a = 5;
// // Global
// // parent: null
// // a: 5

// fn();

