axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Beared jqueryismyjam`;

const fetchUsers = () => {
  return axios
    .get('/users')
    .then(console.log)
    .catch(console.warn);
};

const fetchUserById = userId => {
  return axios
    .get(`/users/${userId}`)
    .then(console.log)
    .catch(console.warn);
};

const addUser = (name, email) => {
  const body = { name, email };

  return axios
    .post('/users', body)
    .then(console.log)
    .catch(console.warn);
};

const deleteUser = userId => {
  return axios
    .delete(`/users/${userId}`)
    .then(console.log)
    .catch(console.warn);
};

const updateUser = (userId, update) => {
  return axios
    .patch(`/users/${userId}`, update)
    .then(console.log)
    .catch(console.warn);
};
