import axios from 'axios';

export const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images',
});

export const count = 10;
export const key =
  'live_4cWoPrPMgc8pnmPaypxexed1Q9XzpT1oqh8EYkukDDOlfyteYRI8IZOkwkLe756D';
