'use strict';

// const product = {
//   name: 'Wunder Waffles',
//   description: 'In hac habitasse platea dictumst.',
//   price: 30,
// };

// const key = 'name';

// console.log(product.name);
// console.log(product[key]);

// product.price = 50;

// console.log(product.qwe);

// Shorthand proprties
// const makeProduct = (name, price) => {
//   // return {
//   //   name: name,
//   //   price: price,
//   // };

//   return {
//     name,
//     price,
//     id: 1,
//   };
// };

// console.log(makeProduct('Apples', 50));

// Computed properties
// const key = 'name';
// const value = 10;

// const obj = {
//   a: 1,
//   [`key value ${2 + 2}`]: value,
// };

// // obj[key] = value;

// console.log(obj);

// input name="login" value="mango"
// input name="email" value="mail@mail.com"

// const target = {
//   name: 'email',
//   value: 'mail@mail.com',
// };

// const formData = {
//   [target.name]: target.value,
// };

// console.log(formData);

// const product = {
//   name: 'Wunder Waffles',
//   description: 'In hac habitasse platea dictumst.',
//   price: 30,
//   changePrice(newPrice) {
//     console.log('this: ', this);
//     this.price = newPrice;
//   },
// };

// product.changePrice(100);

// console.log(product.price);

// Работа с коллекцией
// const storage = {
//   items: [
//     { id: 'id-1', name: 'apples', price: 30 },
//     { id: 'id-2', name: 'grapes', price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];

//       if (product.id === id) {
//         console.log('i: ', i);
//         console.log('product: ', product);
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });

// console.table(storage.getItems());

// storage.removeProduct('id-1');

// console.table(storage.getItems());

// for...in

// const product = {
//   name: 'waffles',
//   price: 50,
//   quantity: 20,
// };

// for (const key in product) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const keys = Object.keys(product);
// console.log(keys);

// for (const key of keys) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const salary = {
//   bob: 100,
//   mary: 200,
//   dick: 300,
// };

// let total = 0;

// for (const key in salary) {
//   console.log(`key: ${key}, value: ${salary[key]}`);

//   total += salary[key];
// }

// console.log('total: ', total);

// const salaryValues = Object.values(salary);
// console.log(salaryValues);

// for (const value of salaryValues) {
//   total += value;
// }

// console.log('total: ', total);

