import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '07ace3939090b8eec7f82868435e1fae',
        language: 'pt-BR',
        page: 1

    }
})

export default api