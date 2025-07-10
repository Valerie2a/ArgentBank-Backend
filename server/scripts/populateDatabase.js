const axios = require('axios');
const signupApi = 'http://localhost:3001/api/v1/user/signup';

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron',
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain',
  },
];

async function createUsers() {
  for (const user of users) {
    try {
      const response = await axios.post(signupApi, user);
      console.log(`Utilisateur créé : ${user.email}`);
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message.includes('Email already exists')
      ) {
        console.log(` Utilisateur déjà présent : ${user.email}`);
      } else {
        console.error(` Erreur pour ${user.email} :`, error.message);
      }
    }
  }
}

createUsers();

