import React, { useState } from 'react';
import piratesApi from "../../apis/pirates.api";

const PirateUpdateBoolean = (props) => {
    const { data, field, success } = props;
    //const [pirate, setPirate] = useState(data);
    const { editPirate } = piratesApi;

    const updateField = () => {
        let pirateUpdated = {
            ...data
        };
        pirateUpdated[field] = !data[field];

        editPirate(pirateUpdated)
            .then(response => {
                success(pirateUpdated);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }

    return (
        <button type='button'
            className={data[field] ? 'btn btn-danger' : 'btn btn-success'}
            onClick={updateField}>{data[field] ? 'NO' : 'YES'}</button>
    )
}

export default PirateUpdateBoolean