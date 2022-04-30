import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    const navigate = useNavigate();

    return (
        <div className='border-top border-secondary mt-3'>
            <div className='row mt-3 text-center'>
                <h3>All Products:</h3>
            </div>
            <div className='row mt-2'>
                <div className='list-group'>
                    {
                        props.list.map((product, index) => {
                            return (
                                <button key={product._id} 
                                    type='button' 
                                    className='list-group-item list-group-item-action'
                                    onClick={() => navigate(`/detail/${product._id}`, {})}>
                                        {product.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductList;