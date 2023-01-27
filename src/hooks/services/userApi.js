import api from './api';

export async function signUp(username,email, password) {
  
  console.log("oi")
  const response = await api.post('/user/sign-up', {username, email, password });
  
  
  return response.data;
}