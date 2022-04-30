import axios from 'axios';

const getAllProducts = () => {
    return axios.get("http://localhost:8000/api/products/");
}

const getProduct = (params) => {
    let url = "http://localhost:8000/api/products/";
    if (params) {
        url += params.id;
    }
    return axios.get(url);
}

const addProduct = (body) => {
    return axios.post("http://localhost:8000/api/products/add", body);
}

const productMethods = { getAllProducts, getProduct, addProduct };

export default productMethods;