import axios from 'axios';

export const api = axios.create({
  //added an optional but required parameter for trying to display all cats
  baseURL: 'https://api.api-ninjas.com/v1/cats?min_life_expectancy=1',
});
export const X_API_KEY = 'NpP4RAIs1no62j7ml9jr3Q==jSW9mKwLqEp6tSjc';
