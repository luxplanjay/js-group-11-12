'use strict';

// Работа с коллекцией
const storage = {
  items: [
    { id: 'id-1', name: 'apples', price: 30 },
    { id: 'id-2', name: 'grapes', price: 40 },
  ],
  getItems() {
    return this.items;
  },
  addProduct(product) {
    this.items.push(product);
  },
  findProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i];

      if (product.id === id) {
        return product;
      }
    }
  },
  removeProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i];

      if (product.id === id) {
        console.log('i: ', i);
        console.log('product: ', product);
        this.items.splice(i, 1);
        return;
      }
    }
  },
  changePrice(id, price) {
    const product = this.findProduct(id);

    //  guard clause - если все плохо - ВЫХОДИМ!
    if (!product) {
      return;
    }

    product.price = price;
  },
  changeName(id, name) {
    const product = this.findProduct(id);

    //  guard clause - если все плохо - ВЫХОДИМ!
    if (!product) {
      return;
    }

    product.name = name;
  },
  getProductNames() {
    const names = [];

    for (const { name } of this.items) {
      names.push(name);
    }

    return names;
  },
  filterWithPrice(threshold) {
    const filtered = [];

    for (const item of this.items) {
      if (item.price >= threshold) {
        filtered.push(item);
      }
    }

    return filtered;
  },
};

console.table(storage.getItems());

storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });
console.table(storage.getItems());

storage.removeProduct('id-1');
console.table(storage.getItems());

storage.changePrice('id-3', 100);
console.table(storage.getItems());

console.table(storage.getProductNames());

console.table(storage.filterWithPrice(60));
