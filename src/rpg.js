'use strict';

class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);

    super.gainXp(10);
  }
}

const mango = new Warrior('Mango', 1000, 'axe');
console.log(mango);
mango.attack();

class Berserk extends Warrior {
  constructor(name, xp, weapon, roar) {
    super(name, xp, weapon);

    this.roar = roar;
  }

  battlecry() {
    console.log(this.roar);
  }
}

const poly = new Berserk('Poly', 1000, 'halberd', 'Waaaaaaaaah!');

console.log(poly);

poly.battlecry();
