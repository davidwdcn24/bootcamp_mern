import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    let params = useParams();

    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + params.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>
            <Link to={"/people/" + person._id + "/edit"}>
                Edit
            </Link>
            </p>
        </div>
    )
}

export default Detail;