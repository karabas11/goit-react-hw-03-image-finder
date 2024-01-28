import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '39533790-85df6cbf34193d8f2f0ca09de',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (searchQueru, page) => {
  const response = await axios.get(`?q=${searchQueru}&page=${page}`);

  const data = response.data;
  return data;
};
