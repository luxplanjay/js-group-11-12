import tableRowTemplate from '../templates/swapi-table-row.hbs';

const baseUrl = 'https://swapi.co/api/';
const tableBody = document.querySelector('#swapi-planets tbody');

fetch(baseUrl + 'planets/', {
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => {
    console.log(response);

    return response.json();
  })
  .then(data => {
    console.log(data);

    renderTableRows(data.results);
  });

function renderTableRows(planets) {
  const markup = planets.map(planet => tableRowTemplate(planet)).join('');

  tableBody.insertAdjacentHTML('beforeend', markup);
}
