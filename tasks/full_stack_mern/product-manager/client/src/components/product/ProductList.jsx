import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const ProductList = ({ list, deleteProductDom }) => {
    const navigate = useNavigate();

    return (
        <div className='border-top border-secondary mt-3'>
            <div className='row mt-3 text-center'>
                <h3>All Products:</h3>
            </div>
            <div className='row mt-2'>
                <ul className='list-group'>
                    {
                        list.map((product, index) => {
                            return (
                                <li key={product._id}
                                    className='list-group-item'>
                                    <div className='d-flex align-items-center'>
                                        <button type='button'
                                            className='btn btn-secondary'
                                            onClick={() => navigate(`/detail/${product._id}`, {})}>Detail</button>
                                        <DeleteProduct productId={product._id} 
                                            successCallBack={() => deleteProductDom(product._id)}></DeleteProduct>
                                        <span className='ms-2'>{product.title}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ProductList;