import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})