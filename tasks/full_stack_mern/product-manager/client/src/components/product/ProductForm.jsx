import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productMethods from '../../apis/ApiProduct'

const PersonForm = ({ addProductDom, petition }) => {
    let params = useParams();
    const { getProduct, addProduct, editProduct } = productMethods;
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (petition === "put") {
            getProduct({ id: params.id })
                .then(response => setProduct(response.data))
                .catch(error => {
                    console.log("Error: ", error);
                    setMsg(error.message);
                });
        }
    }, []);

    const submitHandler = evt => {
        evt.preventDefault();

        switch (petition) {
            case "post":
                addProduct(product)
                    .then(response => {
                        console.log("Response: ", response);
                        addProductDom(response.data);
                        setProduct({});
                        setMsg("Data recorded successfully.");
                    })
                    .catch(error => {
                        console.log("Error: ", error);
                        setMsg(error.message);
                    });
                break;
            case "put":
                editProduct(product)
                    .then(response => {
                        console.log("Response: ", response);
                        navigate("/", {});
                        setMsg("Data recorded successfully.");
                    })
                    .catch(error => {
                        console.log("Error: ", error);
                        setMsg(error.message);
                    });
                break;
            default:
                break;
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row mt-3 text-center'>
                {
                    petition === "put" ? (<h3>Update product</h3>) : (<h3>Product Manager</h3>)
                }
            </div>
            {msg.length > 0 && (
                <div className='alert alert-warning mt-3'>{msg}</div>
            )}
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Title</label>
                <div className='col-sm-10'>
                    <input type="text"
                        className="form-control"
                        placeholder="Title"
                        value={product.title || ''}
                        onChange={evt => setProduct({ ...product, "title": evt.target.value })} />
                </div>
            </div>
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Price</label>
                <div className='col-sm-10'>
                    <input type="number"
                        className="form-control"
                        placeholder="Price"
                        value={product.price || 0}
                        onChange={evt => setProduct({ ...product, "price": evt.target.value })} />
                </div>
            </div>
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Description</label>
                <div className='col-sm-10'>
                    <input type="text"
                        className="form-control"
                        placeholder="Description"
                        value={product.description || ''}
                        onChange={evt => setProduct({ ...product, "description": evt.target.value })} />
                </div>
            </div>
            <div className='row mt-3'>
                <button type='submit'
                    className='btn btn-secondary m-auto'
                    style={{ width: '100px' }}>{petition === "put" ? 'Update' : 'Create'}</button>

                {
                    petition === "put" ? (
                        <button type='button'
                            className='btn btn-secondary m-auto'
                            style={{ width: '100px' }}
                            onClick={() => navigate(`/detail/${product._id}`, {})}>Cancel</button>
                    ) : ""
                }
            </div>
        </form>
    );
}

export default PersonForm;