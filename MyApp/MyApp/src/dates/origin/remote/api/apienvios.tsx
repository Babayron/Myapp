import axios from 'axios';

const ApiEnvios = axios.create({
    baseURL: 'localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiEnvios}