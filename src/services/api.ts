import axios from 'axios'
import { getTokenLocal } from './authClient'

export const api = axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/',
  timeout: 3000
})

api.interceptors.request.use(async config => {
  const token = getTokenLocal()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})
