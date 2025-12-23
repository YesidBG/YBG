// services/users.service.js
const KEY = "users";

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(KEY, JSON.stringify(users));
};
