import React, { useEffect, useState } from 'react';
import ProductForm from '../controllers/product/ProductForm';
import ProductList from '../controllers/product/ProductList';
import productMethods from '../apis/ApiProduct'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {getAllProducts} = productMethods

    useEffect(() => {
        getAllProducts()
            .then(response => {
                setProducts(response.data);
                setLoaded(true);
            })
            .catch(error => {
                console.log("Error get all products: ", error);
                setProducts([]);
                setLoaded(false);
            });
    }, []);

    return (
        <div>
            <ProductForm/>
            {loaded && <ProductList list={products}/>}
        </div>
    )
}

export default Main;