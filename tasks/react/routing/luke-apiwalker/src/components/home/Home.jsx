import React from 'react';
import { useEffect, useState } from 'react';
import getData from '../../apis/Api';
import Information from '../information/Information';

const Home = () => {
    const [resources, setResources] = useState([]);
    const [option, setOption] = useState({
        resource: "",
        id: -1
    });
    const [information, setInformation] = useState(null);
    const [msgError, setMsgError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Consulta las opciones que debe tener el combo.
    useEffect(() => {
        getData(null)
            .then(response => {
                console.log(response.data);
                setResources(response.data);
            })
            .catch(error => setMsgError(error));
    }, []);

    // Inicializa variables.
    const initialize = () => {
        setIsLoading(false);
        setInformation(null);
    }

    // Almacena la opción
    const changeOptions = (evt) => {
        setOption({
            ...option,
            resource: evt.target.value
        });

        initialize();
    }

    // Almacena el id
    const changeId = (evt) => {
        let idText = evt.target.value;
        if (idText <= 0)
            idText = -1;

        setOption({
            ...option,
            id: idText
        });

        initialize();
    }

    // Carga la información
    const loadInformation = () => {
        setIsLoading(true);

        // Valida la información
        if (option.resource.length === 0) {
            initialize();
            setMsgError("Debe seleccionar un recurso.");
        }
        else {
            getData({ resource: option.resource, id: option.id })
                .then(response => setInformation(response.data))
                .catch(error => {
                    setMsgError(error);
                    initialize();
                });
            setMsgError(null);
        }
    }

    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Search for:</span>
                        <select defaultValue=""
                            className="form-select form-select-sm"
                            onChange={changeOptions}>
                            <option value="">Select option</option>
                            {
                                Object.keys(resources).map((value, index) => {
                                    return (<option key={index} value={value}>{value}</option>);
                                })
                            }
                        </select>
                        <span className="input-group-text">Id:</span>
                        <input type="number" className="form-control" onChange={changeId} />
                    </div>
                </div>
                <div className='col-sm-4'>
                    <button className='btn btn-secondary' onClick={loadInformation}>Search</button>
                </div>
            </div>
            {
                (information || msgError) ? (
                    <Information data={{ info: information, id: option.id, error: msgError }}></Information>
                ) : (
                    (isLoading && (
                        <p className="placeholder-glow"><span className="placeholder col-12"></span></p>
                    ))
                )
            }
        </div>
    );
}

export default Home;