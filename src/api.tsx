import axios from 'axios';

const API_URL = 'https://67ba356afbe0387ca136d72e.mockapi.io/dnd/messages';

const fetchMessages = async () => {
  try {
    const responce = await axios.get(API_URL);
    // console.log('responce', responce.data);
    return await responce.data;
  } catch (err) {
    console.error('Error: ', err);
  }
};

export default fetchMessages;
