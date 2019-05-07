const numbers = [1, 2, 1, 3, 2, 4, 5];

// const set = new Set(numbers);

// const unique = [...set];

// console.log(set);
// console.log(unique);

const unqiue = numbers.reduce((accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }

  return accumulator;
}, []);

console.log(unqiue);
