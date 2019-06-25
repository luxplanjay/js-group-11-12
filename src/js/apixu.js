const base = 'http://api.apixu.com/v1';
const resource = '/current.json';
const reqParams = '?key=78f1a6c1d8a84e2fa2d152923192506&q=Kharkiv';

fetch(base + resource + reqParams)
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
  });
