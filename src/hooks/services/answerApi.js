import api from './api';

export async function insertAnswer(answer,userId) {
  const response = await api.post('/answer/answer', {answer,userId});
  return response.data;
}