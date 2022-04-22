import React from 'react';
import { useParams } from 'react-router-dom';

const Word = () => {
    let params = useParams();

    return (
        <div style={{backgroundColor: params.background, color: params.color}} className='p-3 mt-3'>The word is: {params.text}</div>
    );
}

export default Word;