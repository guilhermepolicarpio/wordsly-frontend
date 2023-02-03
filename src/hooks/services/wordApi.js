import axios from 'axios';

export async function getWord() {
  const response = await axios.get('https://random-word-api.herokuapp.com/word');
  return response.data[0];
}