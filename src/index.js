'use strict';

// // const fn = function() {
// //   console.log(this);
// // };

// // fn();

// // const showLabel = function() {
// //   console.log(this);
// //   console.log(this.label);
// // };

// // const product = {
// //   label: 'Adidas',
// // };

// // product.showLabel = showLabel;

// // product.showLabel();

// // console.log(product.showLabel);

// // const printLabel = function(callback) {
// //   const label = callback();

// //   console.log(`Product label: ${label}`);
// // };

// // printLabel(product.showLabel);

// // const showLabel = () => {
// //   console.log(this);
// //   console.log(this.label);
// // };

// // showLabel();

// // const product = {
// //   label: 'Adidas',
// //   showLabel() {
// //     console.log(this);
// //     console.log(this.label);

// //     const fn = () => {
// //       console.log(this);
// //     };

// //     console.log('product: ', product);

// //     // const fn = function() {
// //     //   console.log(this);
// //     // };

// //     fn();
// //   },
// // };

// // product.showLabel();

// // const sell = function(product, price) {
// //   console.log(`Manager ${this.name} sold ${product} for ${price}`);
// //   this.sales += 1;
// // };

// // const mango = {
// //   name: 'Mango',
// //   sales: 10,
// // };

// // const poly = {
// //   name: 'Poly',
// //   sales: 20,
// // };

// // sell.call(mango, 'TV', 50);
// // sell.call(poly, 'GPU', 100);

// // sell.apply(mango, ['TV', 50]);
// // sell.apply(poly, ['GPU', 100]);

// // mango.sell('TV');

// // poly.sell('GPU');

// // bind

// // const product = {
// //   label: 'Adidas',
// //   showLabel() {
// //     console.log(this);
// //     console.log(this.label);

// //     return this.label;
// //   },
// // };

// // const printLabel = function(callback) {
// //   const label = callback();

// //   console.log(`Product label: ${label}`);
// // };

// // // const boundShowLabel = product.showLabel.bind(product);

// // printLabel(product.showLabel.bind(product));

// // Конструкторы ==============================================
// // const Manager = function(name, sales = 0) {
// //   // this = {}

// //   this.name = name;
// //   this.sales = sales;

// //   this.sell = function(product, price) {
// //     console.log(`Manager ${this.name} sold ${product} for ${price}`);
// //     this.sales += 1;
// //   };

// //   // return this;
// // };

// // const mango = new Manager('Mango', 5);
// // console.log(mango);
// // mango.sell('TV', 50);

// // const poly = new Manager('Poly', 10);
// // console.log(poly);
// // poly.sell('GPU', 100);

// // const makeSound = function() {
// //   console.log(this.sound);
// // };

// // const dog = {
// //   sound: 'woof',
// // };

// // dog.bark = makeSound;

// // const fn = function(callback) {
// //   callback();
// // };

// // fn(dog.bark.bind(dog));

// // const dog = {
// //   sound: 'woof',
// //   fn() {
// //     const makeSound = () => {
// //       console.log(this);
// //       console.log(this.sound);
// //     };

// //     return makeSound;
// //   },
// // };

// // const makeSound = dog.fn();

// // makeSound();

