const cart = {
  items: [
    { id: 12312313123, name: 'Монорельса' },
    { id: 475660606, name: 'Аптечка' },
  ],
  add(itemName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = {
          id: Date.now(),
          name: itemName,
        };

        this.items.push(item);

        resolve(item);
      }, 2000);
    });
  },
  remove(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.items = this.items.filter(item => item.id !== id);

        resolve(id);
      }, 300);
    });
  },
  update(id) {
    // return new Promise(resolve => {
    //   resolve(id);
    // });

    return Promise.resolve(id);
  },
};

cart
  .add('Глюкоза')
  .then(addedItem => {
    updateUIAfterAdd(addedItem);
  })
  .catch(error => {
    console.log(error);
  });

cart
  .remove(475660606)
  .then(id => {
    updateUIAfterRemove(id);
  })
  .catch(error => {
    console.log(error);
  });

cart.update(1).then(id => updateUIAfterUpdate(id));

function updateUIAfterAdd(item) {
  console.log(`Updating with item id ${item.id}`);
}

function updateUIAfterRemove(id) {
  console.log(`Removing item with id ${id}`);
}

function updateUIAfterUpdate(id) {
  console.log('Updated ' + id);
}
