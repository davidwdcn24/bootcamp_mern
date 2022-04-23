import axios from 'axios';

const options = {
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "films": "https://swapi.dev/api/films/",
    "species": "https://swapi.dev/api/species/",
    "vehicles": "https://swapi.dev/api/vehicles/",
    "starships": "https://swapi.dev/api/starships/"
}

const getData = (params) => {
    // Genera url
    let url = "https://swapi.dev/api/";
    if (params) {
        let { resource, id, spedificUrl } = params;

        // Toma una url específica.
        if (spedificUrl) {
            url = spedificUrl;
        } 
        // Toma la url del recurso
        else if (resource) {
            url = options[resource];
        }

        // Agrega un parámetro
        if (id) {
            if(typeof id === 'string'){
                id = isNaN(id) ? 99 : parseInt(id);
            }

            // Incluye el id
            if(id > 0)
                url = url + id;
        }
    }

    return axios.get(url);
}

export default getData;