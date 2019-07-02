// GET - чтение
const fetchUsers = () => {
  return fetch('http://localhost:4040/users')
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};

const fetchUserById = userId => {
  return fetch(`http://localhost:4040/users/${userId}`)
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};

// POST - создание
const addUser = (name, email) => {
  const url = 'http://localhost:4040/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};

// DELETE - удаление
const deleteUser = userId => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: 'DELETE'
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};

// PATCH - обновление
const updateUser = (userId, update) => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(update)
  };

  return fetch()
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};
