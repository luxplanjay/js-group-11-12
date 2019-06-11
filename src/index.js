import './js/quiz';
import './css/styles.css';

const qestionsLength = 2;

document.querySelector('.test-form').addEventListener('change', e => {
  const form = e.currentTarget;
  const formData = new FormData(form);
  let formDataLength = 0;

  formData.forEach(() => {
    formDataLength += 1;
  });

  if (formDataLength === qestionsLength) {
    console.log('all selected');

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = false;
  }
});
