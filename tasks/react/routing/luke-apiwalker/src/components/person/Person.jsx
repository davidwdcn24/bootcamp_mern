import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getData from '../../apis/Api';
import Information from '../information/Information';

const Person = () => {
    let params = useParams();
    const [information, setInformation] = useState(null);
    const [msgError, setMsgError] = useState(null);

    useEffect(() => {
        getData({resource: "people", id: params.id})
            .then(response => {
                setInformation(response.data);
                getHomeWorld(response.data);
            })
            .catch(error => {
                setMsgError(error);
                setInformation(null);
            });
    }, [params.id]);

    const getHomeWorld = (data) => {
        getData({spedificUrl: data["homeworld"]})
            .then(response => {
                setInformation({
                    ...data,
                    "homeworld": response.data["name"]
                });
            })
            .catch(error => {
                setMsgError(error);
                setInformation(null);
            });
    }

    return (
        <div className='container-fluid mt-3'>
            <Information data={{ info: information, id: (isNaN(params.id) ? -1 : parseInt(params.id)), error: msgError }}></Information>
        </div>
    )
}

export default Person;
