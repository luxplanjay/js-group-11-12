const form = document.querySelector('.js-register-form');

form.addEventListener('submit', handleSubmitWithFormData);

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  console.dir(elements);

  const nameInput = elements.name;
  const emailInput = elements.email;
  const passwordInput = elements.password;
  const subscription = elements.subscription.value;

  const data = {
    [nameInput.name]: nameInput.value,
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
    subscription
  };

  console.log(data);
}

function handleSubmitWithFormData(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((value, name) => {
    console.log(`Name: ${name}, Value: ${value}`);
    data[name] = value;
  });

  console.log(data);
}
