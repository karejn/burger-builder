import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-19c86.firebaseio.com/'
});

export default instance;