import React, { useEffect, useState } from 'react';
import ProductForm from '../components/product/ProductForm';
import ProductList from '../components/product/ProductList';
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

    const addProductDom = (product) => {
        setProducts([...products, product]);
    }

    const deleteProductDom = (id) => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div>
            <ProductForm addProductDom={addProductDom} petition={"post"} />
            {loaded && <ProductList list={products} deleteProductDom={deleteProductDom}/>}
        </div>
    )
}

export default Main;