'use strict';

class Hero {
  static randomProp = 'random prop value';

  static doStuff() {}

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  // Публичное свойство класса
  // this.a
  a = 5;

  //this.gainXp
  gainXp = amount => {
    this.xp += amount;
    console.log(this.xp);
  };

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }
}

const mango = new Hero('Mango', 1000);

console.log(mango);

console.log(mango.name);
mango.name = 'Poly';

console.log(mango.name);

const fn = function(callback) {
  callback(1000);
};

fn(mango.gainXp);
