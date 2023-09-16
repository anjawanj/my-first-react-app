import axios from 'axios'

const PRODUCTS_GET_API_URL = 'http://localhost:4000/products';

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_GET_API_URL);
    }
   
}

export default new ProductService();