import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://angel-s-burger.firebaseio.com/'
});

export default instance;