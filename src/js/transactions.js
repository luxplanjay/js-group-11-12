import transactionHistory from './transaction-history.js';

const table = document.querySelector('.transaction-table');

const markup = createTableRows(transactionHistory);

table.insertAdjacentHTML('beforeend', markup);

function createTableRows(transactions) {
  return transactions
    .map(transaction => createTableRowMarkup(transaction))
    .join('');
}

function createTableRowMarkup({ type, amount, date, business }) {
  const row = `
  <tr>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
  </tr>
  `;

  return row;
}
