import axios from 'axios'

// Exemplo de pesquisa na api: https://viacep.com.br/ws/88119434/json/


const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api