import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-be-the-hero.herokuapp.com:3333',
});

export default api;