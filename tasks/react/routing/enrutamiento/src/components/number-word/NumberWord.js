import React from 'react';
import { useParams } from 'react-router-dom';

const NumberWord = () => {
    let params = useParams();

    return (
        <div className='p-3 mt-3'>{isNaN(params.text) ? `The word is: ${params.text}` : `The numer is: ${params.text}`}</div>
    );
}

export default NumberWord;