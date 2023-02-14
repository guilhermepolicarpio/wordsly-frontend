import api from './api';

export async function signUp(username, email, password, userImage) {
  const response = await api.post('/user/sign-up', { username, email, password, userImage });

  return response.data;
}

export async function signIn(email, password) {
  const response = await api.post('/user/sign-in', { email, password });
  return response.data;
}