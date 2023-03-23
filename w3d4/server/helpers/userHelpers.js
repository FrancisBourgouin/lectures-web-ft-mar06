const users = require("../data/userDatabase");

const authenticateUser = (email, password) => {
  const user = users[email];

  if (!user) {
    return { err: "User doesnt exist", user: null };
  }

  if (user.password !== password) {
    return { err: "Password doesnt match", user: null };
  }

  return { err: null, user };
};

const fetchUserByEmail = (email) => {
  const user = users[email];

  if (!user) {
    return { err: "no user found", user: null };
  }

  return { err: null, user };
};

module.exports = { authenticateUser, fetchUserByEmail };
