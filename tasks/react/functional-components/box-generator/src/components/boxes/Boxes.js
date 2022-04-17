import React from 'react';

const Boxes = (props) => {
    console.log(props);
    return (
        <div className='d-flex flex-wrap'>
            {
                props.colors.map( (item, index) => {
                    return (
                        <div key={index} 
                            style={{backgroundColor: item, width: props.len, height: props.len}}
                            className='m-2'>&nbsp;</div>
                    )
                })
            }
        </div>
    );
}

export default Boxes;