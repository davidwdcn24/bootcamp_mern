import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setPokemons(response.data.results); })
    }

    const handleClick = () => {
        getPokemon();
    }

    return (
        <div className='container-fluid mt-3'>
            <button className='btn btn-primary' onClick={handleClick}>Fetch Pokemon</button>
            <div style={{ width: "300px" }} className='m-auto'>
                {pokemons.length > 0 ? (
                    <ul>
                        {pokemons.map((value, index) => {
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