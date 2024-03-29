// routes/user.js

const {
    addUser,
    getUsers,
    getSingleUser,
    deleteUser,
    updateUser,
  } = require('../controllers/user');
  
  const routes = [
    {
      method: 'POST',
      url: '/api/users',
      handler: addUser,
  
    },
    {
      method: 'GET',
      url: '/api/users',
      handler: getUsers,
    },
    {
      method: 'GET',
      url: '/api/users/:id',
      handler: getSingleUser,
    },
    {
      method: 'DELETE',
      url: '/api/users/:id',
      handler: deleteUser,
    },
    {
      method: 'PUT',
      url: '/api/users/:id',
      handler: updateUser,
    },
  ];
  
  module.exports = routes;
  