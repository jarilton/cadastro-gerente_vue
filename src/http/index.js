import axios from 'axios'
import { config } from 'vue'

const http = axios.create({
      baseURL: 'http://localhost:8080/',
      headers: {
            'Accept': 'application/json',
            'Content': 'application/json'
      }
})

http.interceptors.request.use(function () {
      const token = localStorage.getItem('token')
      if (token) {
            config.headers.Authorization = `Bearer ${token}`
      }
      return config
}, function (erro) {
      return Promise.reject(erro);
})

export default http