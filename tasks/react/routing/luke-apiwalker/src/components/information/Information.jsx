import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Result = (props) => {
    const { info, id, error } = props.data;

    const noPrint = ["films", "species", "vehicles", "starships",
        "created", "edited", "url", "residents", "characters",
        "planets", "starships", "people"];

    // Imprime todo una lista. Usado cuando no se envía un id.
    const printArray = (nameElement, array) => {
        return (
            <div>
                <h1>{nameElement}</h1>
                {
                    array.map((element) => {
                        // Obtiene el nombre
                        const { name, title } = element;

                        // Código único.
                        let uuid = uuidv4();

                        return (
                            <div>
                                <h4>{name || title}</h4>
                                <ul key={uuid} className='list-group list-group-flush'>
                                    {
                                        Object.keys(element).map((value, index) => {
                                            if (noPrint.find(n => n === value) !== undefined)
                                                return ('');

                                            uuid = uuidv4();
                                            return (<li key={uuid} className='list-group-item'>
                                                {
                                                    (typeof element === 'string') ? element : `${value}: ${element[value]}`
                                                }
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='container-fluid mt-3'>
            {
                (error) && (
                    <div className='row'>
                        <div className='alert alert-warning mt-3'>
                            <p>Estos no son los droides que está buscando</p>
                            <p>
                                {
                                    (error instanceof Error) ?
                                        (error.message) :
                                        (error)
                                }
                            </p>
                        </div>
                        <img src="/assets/images/obi_wan_kenobi.jpg" alt="Obi-Wan Kenobi" />
                    </div>
                )
            }
            {
                (info) ? (
                    <ul className='list-group list-group-flush'>
                        {
                            Object.keys(info).map((value, index) => {
                                if (noPrint.find(n => n === value) !== undefined)
                                    return ('');

                                const valueElement = info[value];

                                if (id > 0 && Array.isArray(valueElement))
                                    return ('');

                                const uuid = uuidv4();

                                // Obtiene el nombre
                                let name = '';
                                if (value === 'name' || value === 'title')
                                    name = valueElement;

                                return (<li key={uuid} className='list-group-item'>
                                    {
                                        (name) ?
                                            (<h2>{name}</h2>) :
                                            (
                                                (Array.isArray(valueElement)) ?
                                                    printArray(value, valueElement) :
                                                    `${value}: ${valueElement}`
                                            )
                                    }
                                </li>)
                            })
                        }
                    </ul>
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default Result