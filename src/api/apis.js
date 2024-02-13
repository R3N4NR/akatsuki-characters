import axios from 'axios'

export const api = async(endpoint, queryParams ) => {
    const baseUrl = 'https://dattebayo-api.onrender.com'
    const url = `${baseUrl}/${endpoint}`;
    
    
  try {
    const response = await axios.get(url, { params: queryParams });
    console.log('Dados da API:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Erro ao acessar a API:', error);
    throw error;
  }
}
