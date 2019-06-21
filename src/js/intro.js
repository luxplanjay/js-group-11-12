const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve('Promise resolved!');
    } else {
      reject('Promise rejected!');
    }
  }, 1000);
});

console.log('before');

const onSuccess = message => {
  console.log(message);
};

const onError = error => {
  console.error(`Error - ${error}`);
};

promise.then(onSuccess).catch(onError);

console.log('after');
