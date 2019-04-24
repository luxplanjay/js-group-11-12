'use strict';

const animal = {
  barks: true,
};

// const dog = {
//   sound: 'woof',
// };
// dog.__proto__ = animal;

const dog = Object.create(animal);
dog.sound = 'woof';

console.log('dog: ', dog);

// console.log(dog.sound);
// console.log(dog.barks);
// console.log('dog.hasOwnProperty("sound"): ', dog.hasOwnProperty('sound'));
// console.log('dog.hasOwnProperty("barks"): ', dog.hasOwnProperty('barks'));
// console.log(dog.qwe);

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key);
// }

const Hero = function(name, xp) {
  // this = Object.create(Hero.prototype)
  this.name = name;
  this.xp = xp;

  // return this
};

Hero.prototype.changeName = function(name) {
  console.log('this: ', this);
  this.name = name;
};

console.log('Hero.prototype: ', Hero.prototype);

const mango = new Hero('Mango', 1000);
mango.changeName('Mango the great');
console.log(mango);

console.log(
  'mango.__proto__ === Hero.prototype: ',
  mango.__proto__ === Hero.prototype,
);

const poly = new Hero('Poly', 2000);
poly.changeName('Poly the magnificent');
console.log(poly);

console.log(
  'poly.__proto__ === Hero.prototype: ',
  poly.__proto__ === Hero.prototype,
);
