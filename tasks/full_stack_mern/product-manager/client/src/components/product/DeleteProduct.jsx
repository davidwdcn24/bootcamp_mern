import React from 'react'
import productMethods from '../../apis/ApiProduct'

const DeleteProduct = props => {
  const { removeProduct } = productMethods;
  const { productId, successCallBack } = props;
  const deleteProduct = () => {
    removeProduct(productId);
    successCallBack();
  }
  return (
    <button type='button'
      className='btn btn-secondary ms-2'
      onClick={() => deleteProduct()}>Delete</button>
  )
}

export default DeleteProduct