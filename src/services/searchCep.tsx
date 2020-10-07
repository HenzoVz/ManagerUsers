import axios from 'axios';

const searchCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default searchCep;
