import api from './api';

export async function signUp(username,email, password) {
  
  console.log("oi")
  const response = await api.post('/user/sign-up', {username, email, password });
  
  
  return response.data;
}

export async function signIn(email, password) {
  console.log(email)
  console.log(password)
  const response = await api.post('/user/sign-in', { email, password });
  return response.data;
}