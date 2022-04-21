import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [list, setList] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setList(response.results))
    }

    const handleClick = () => {
        getPokemon();
    }

    return (
        <div className='container-fluid mt-3'>
            <button className='btn btn-primary' onClick={handleClick}>Fetch Pokemon</button>
            <div style={{width:"300px"}} className='m-auto'>
                { list.length > 0 ? (
                    <ul>
                        {list.map((value, index) => {
                            return (
                                <li key={value.name}>{value.name}</li>
                            )
                        })}
                    </ul>
                ) : null}
            </div>

        </div>
    );
}

export default Pokemon;