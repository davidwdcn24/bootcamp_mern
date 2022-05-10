import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    let params = useParams();

    const { id } = params;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
    }
    return (
        <div>
            {loaded && (
                <PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                />
            )}
        </div>
    )
}

export default Update;