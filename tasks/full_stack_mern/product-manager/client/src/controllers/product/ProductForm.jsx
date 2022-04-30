import React, { useState } from 'react';
import productMethods from '../../apis/ApiProduct'

const PersonForm = () => {
    const { addProduct } = productMethods;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [result, setResult] = useState({
        product: null,
        msg: ""
    });

    const submitHandler = evt => {
        evt.preventDefault();
        addProduct({ title, price, description })
            .then(response => {
                console.log("Response: ", response);

                setTitle("");
                setPrice(0);
                setDescription("");
                setResult({
                    product: response,
                    msg: "The product was created successfully."
                });
            })
            .catch(error => {
                console.log("Error: ", error);
                setResult({
                    product: null,
                    msg: error.message
                });
            });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row mt-3 text-center'>
                <h3>Product Manager</h3>
            </div>
            {result.msg.length > 0 && (
                <div className='alert alert-warning mt-3'>{result.msg}</div>
            )}
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Title</label>
                <div className='col-sm-10'>
                    <input type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={evt => setTitle(evt.target.value)} />
                </div>
            </div>
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Price</label>
                <div className='col-sm-10'>
                    <input type="number"
                        className="form-control"
                        placeholder="Price"
                        value={price}
                        onChange={evt => setPrice(evt.target.value)} />
                </div>
            </div>
            <div className='row mt-3 bg-light py-3'>
                <label className='col-sm-2 col-form-label'>Description</label>
                <div className='col-sm-10'>
                    <input type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={evt => setDescription(evt.target.value)} />
                </div>
            </div>
            <div className='row mt-3'>
                <button type='submit' 
                    className='btn btn-secondary m-auto' 
                    style={{width: '100px'}}>Create</button>
            </div>
        </form>
    );
}

export default PersonForm;