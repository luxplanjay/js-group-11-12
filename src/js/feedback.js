import debounce from 'lodash.debounce';

const refs = {
  form: document.querySelector('#feedback-form'),
};

const persistedFeedback = localStorage.getItem('feedback');

if (persistedFeedback) {
  const textarea = refs.form.elements.message;
  textarea.value = persistedFeedback;
}

refs.form.addEventListener(
  'input',
  debounce(e => {
    const textarea = e.target;
    localStorage.setItem('feedback', textarea.value);
  }, 300),
);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem('feedback');
});
