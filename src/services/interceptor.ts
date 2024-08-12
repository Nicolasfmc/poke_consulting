import axios from 'axios'
import { toast } from 'react-toastify'

const URL = 'https://poke-api-backend.onrender.com'

// Crie uma instância do axios para centralizar a configuração
const api = axios.create({
  baseURL: URL,
})

// Adicione o interceptor de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken')
    if (token && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Verifique se há uma resposta de erro
    if (error.response) {
      const status = error.response.status
      const message =
        error.response.data.message || 'Ocorreu um erro inesperado'

      if (status === 404) {
        toast.error(`Recurso não encontrado: ${message}`)
      } else {
        toast.error(`Erro ${status}: ${message}`)
      }
    } else {
      // Erro sem resposta (ex: problemas de rede)
      toast.error('Ocorreu um erro de rede')
    }

    return Promise.reject(error)
  },
)

export default api
