import axios from 'axios';
//100.24.3.36
const urlBase = process.env.REACT_APP_PLAYERS_API_BASE_URL;

axios.defaults.withCredentials = true;

const getAllPlayers = () => {
    return axios.get(urlBase);
}

const getPlayer = (params) => {
    let url = urlBase;
    if (params) {
        url += params.id;
    }

    return axios.get(url);
}

const addPlayer = (body) => {
    return axios.post(urlBase, body);
}

const editPlayer = (body) => {
    let url = urlBase;
    if (body) {
        url += body._id;
    }

    return axios.put(url, body);
}

const removePlayer = (id) => {
    let url = urlBase + id;

    return axios.delete(url);
}

const PlayerMethods = { getAllPlayers, getPlayer, addPlayer, editPlayer, removePlayer };

export default PlayerMethods;