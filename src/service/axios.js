import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/api'
    baseURL: 'https://santacarga.contetecnologia.com.br/api/public/api'
});

export default api; 