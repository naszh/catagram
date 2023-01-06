import axios from 'axios';

export const count = 10;

export const key =
  'live_4cWoPrPMgc8pnmPaypxexed1Q9XzpT1oqh8EYkukDDOlfyteYRI8IZOkwkLe756D';
export const catStoriesApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images',
});

export const catPostsApi = axios.create({
  baseURL: 'https://cataas.com',
});

export const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/cats',
});
export const X_API_KEY = 'NpP4RAIs1no62j7ml9jr3Q==jSW9mKwLqEp6tSjc';
