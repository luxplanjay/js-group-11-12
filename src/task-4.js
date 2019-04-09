/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

const names = [
  'Радар',
  'Сканер',
  'Дроид',
  'Захват',
  'Двигатель',
  'Топливный бак',
];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// {
//   'Радар':  1000,
//   'Сканер': 2000
// }

const combine = function(names, prices) {
  const combined = [];
  console.table(names);
  console.table(prices);

  for (let i = 0; i < names.length; i += 1) {
    // console.log(names[i]);
    // console.log(prices[i]);

    const obj = {
      name: names[i],
      price: prices[i],
    };

    combined.push(obj);

    // console.log(obj);
  }

  return combined;
};

const products = combine(names, prices);
console.table(products); // массив объектов со свойствами name и price
