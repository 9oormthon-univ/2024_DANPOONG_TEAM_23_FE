import axios from 'axios'
import type { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export { axiosInstance }
