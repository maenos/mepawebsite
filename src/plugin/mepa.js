// src/axios.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-KEY': '48e81e4d4f4164ecce03a139bc0fd407ccf50ab77a1aa5fe250ef067600e99d2', // si tu veux la gérer via .env
  },
  timeout: 10000,
})

export default api
