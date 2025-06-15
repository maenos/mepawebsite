// src/axios.js
import axios from 'axios'

const api = axios.create({
  //  baseURL: 'http://localhost:8000/api',
  baseURL: 'https://api.eglisesiloecentre.org/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-KEY': 'Sc_7Qm9pL3vN8wR2tK5hJ6bX4zF1gY0aS', // si tu veux la gérer via .env
  },
  timeout: 10000,
})

export default api
