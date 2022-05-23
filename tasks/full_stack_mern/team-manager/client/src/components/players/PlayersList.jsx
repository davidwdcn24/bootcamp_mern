import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import playersApi from "../../apis/players.api";
import PlayerDelete from './PlayerDelete';

const PlayersList = () => {
    const [players, setPlayers] = useState([]);
    const [msg, setMsg] = useState("");
    const { getAllPlayers } = playersApi;

    useEffect(() => {
        getAllPlayers()
            .then(response => {
                setPlayers(response.data.sort((a, b) => { return a.name.localeCompare(b.name) }));
                setMsg("");
            })
            .catch(error => {
                setMsg(error.response.data.message || error.response.message);
                setPlayers([]);
            });
    }, []);

    const deletePlayer = (id) => {
        setPlayers(players.filter(player => player._id !== id));
    }

    return (
        <div className="App-body">
            {msg.length > 0 && (
                <div className='alert alert-warning mt-3'>{msg}</div>
            )}
            {
                <>
                    <div className="d-flex align-items-center w-100 my-3">
                        <Link to="/players/list" className="mx-3">List</Link> |{" "}
                        <Link to="/players/addplayer" className="mx-3">Add Player</Link>
                    </div>
                    <div className="w-100">
                        <table className="table table-bordered border-dark">
                            <thead className="table-secondary">
                                <tr>
                                    <th>Team Name</th>
                                    <th>Preferred Position</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (players !== null && players !== undefined && players.length > 0) ?
                                        (
                                            players.map((player, index) => {
                                                return (
                                                    <tr key={player._id}>
                                                        <td>{player.name}</td>
                                                        <td>{player.preferredPosition}</td>
                                                        <td>
                                                            <PlayerDelete playerId={player._id} successCallBack={deletePlayer} />
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : ""
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </div>
    )
}

export default PlayersList