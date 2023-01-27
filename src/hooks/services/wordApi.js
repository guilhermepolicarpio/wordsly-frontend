import axios from 'axios';

export async function getWord() {

  const response = await axios.get('https://random-word-api.herokuapp.com/word');
  console.log(response.data[0])
  return response.data[0];
}