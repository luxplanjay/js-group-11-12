import quizData from './quiz-data.json';

const quizForm = document.querySelector('.quiz-form');
const correctAnswers = quizData.questions.map(question => question.answer);

const markup = buildQuestionsMarkup(quizData.questions);
quizForm.insertAdjacentHTML('afterbegin', markup);

quizForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const selectedAnswers = [];

  formData.forEach((value, name) => {
    selectedAnswers.push({
      name,
      value: Number(value),
    });
  });

  const validatedAnswers = selectedAnswers.map((answer, idx) => ({
    ...answer,
    passed: answer.value === correctAnswers[idx],
  }));

  // selectedAnswers.forEach((answer, idx) => {
  //   validatedAnswers.push({
  //     ...answer,
  //     passed: answer.value === correctAnswers[idx],
  //   });
  // });

  console.log(validatedAnswers);

  validatedAnswers.forEach(answer => {
    const input = form.querySelector(
      `input[name="${answer.name}"][value="${answer.value}"]`,
    );

    const parentLabel = input.parentElement;
    parentLabel.style.backgroundColor = answer.passed ? 'green' : 'red';
  });

  const amountOfCorrectAnswers = validatedAnswers.reduce((acc, answer) => {
    if (answer.passed) {
      return acc + 1;
    }

    return acc;
  }, 0);

  const percentage = Math.round(
    (amountOfCorrectAnswers / validatedAnswers.length) * 100,
  );

  if (percentage >= 80) {
    console.log('Passed!!!!');
  } else {
    console.log('Failed!!!!');
  }
}

function buildQuestionsMarkup(questions) {
  return questions
    .map(
      (question, questionIndex) => `<section>
  <h3>${questionIndex + 1}. ${question.question}</h3>

  <ol>
  ${question.choices
    .map(
      (choice, choiceIndex) => `
      <li>
        <label>
          <input type="radio" name="q_${questionIndex}" value="${choiceIndex}" />
          ${choice}
        </label>
      </li>`,
    )
    .join('')}
  </ol>
</section>`,
    )
    .join('');
}
