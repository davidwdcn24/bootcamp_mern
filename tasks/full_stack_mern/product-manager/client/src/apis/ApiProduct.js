import axios from 'axios';

let addProduct = (body) => {
    return axios.post("http://localhost:8000/api/products/add", body);
}

const productMethods = {addProduct};

export default productMethods;