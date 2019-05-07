const numbers = [1, 2, 3, 4, 5];

Array.prototype.customMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i += 1) {
    const el = callback(this[i], i, this);

    result.push(el);
  }

  return result;
};

console.log(
  numbers.customMap((element, index, array) => {
    console.group(`iteration ${index}`);

    console.log('element: ', element);
    console.log('index: ', index);
    console.log('array: ', array);

    console.groupEnd(`iteration ${index}`);
    return element * 2;
  }),
);

console.log(numbers);
