import axios from 'axios';

const baseUrl = 'http://localhost:3000/v1/';

export default {
  auth: {
    signUp: credentials =>
      axios
        .post(`${baseUrl}auth/register`, credentials)
        .then(res => res)
        .catch(error => error.response.data),

    signIn: credentials =>
      axios
        .post(`${baseUrl}auth/login`, credentials)
        .then(res => res.data)
        .catch(error => error.response.data),

    verifyEmail: token =>
      axios
        .post(`${baseUrl}auth/verify-email/?token=${token}`)
        .then(res => res.data)
        .catch(error => error.response.data),
  },

  user: {
    fetchUser: (userId, token) =>
      axios
        .get(`${baseUrl}users/${userId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(res => res)
        .catch(error => error.response.data),
  },
};
