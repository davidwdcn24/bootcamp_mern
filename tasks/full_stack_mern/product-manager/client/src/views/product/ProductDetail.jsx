import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import productMethods from '../../apis/ApiProduct'
import './ProductDetail.css'

const ProductDetail = () => {
    let params = useParams();
    const { getProduct } = productMethods;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getProduct({ id: params.id })
            .then(response => {
                setProduct({ ...response.data });
            })
            .catch(error => {
                console.log("Error get product: ", error);
                setProduct({});
            });
    }, []);

    return (
        <div className='vh-100'>
            <div className='container-fluid produt-vertical-middle'>
                <div className='row text-center'><h1>{product.title}</h1></div>
                <div className='row text-center'><span><b>Price: </b> {"$" + product.price}</span></div>
                <div className='row text-center'><span><b>Description: </b> {product.description}</span></div>
                <div className='row'>
                    <button type='button'
                        className='btn btn-secondary m-auto'
                        style={{ width: '100px' }}
                        onClick={() => navigate(`/edit/${product._id}`, {})}>Edit</button>
                    <button type='button'
                        className='btn btn-secondary m-auto'
                        style={{ width: '100px' }}
                        onClick={() => navigate("/", {})}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;