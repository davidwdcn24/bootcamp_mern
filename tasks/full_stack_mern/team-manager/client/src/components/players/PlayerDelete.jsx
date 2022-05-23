import React from 'react';
import playersApi from '../../apis/players.api';
import Swal from 'sweetalert2'

const PlayerDelete = (props) => {
    const { removePlayer } = playersApi;
    const { playerId, successCallBack } = props;

    const deletePlayer = () => {
        Swal.fire({
            title: "Are you sure you want to remove a player?",
            showCancelButton: true,
            confirmButtonText: "Accept",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                removePlayer(playerId);
                successCallBack(playerId);
            }
        })
    }

    return (
        <button type='button'
            className='btn btn-danger'
            style={{ width: "150px" }}
            onClick={() => deletePlayer()}>Delete</button>
    )
}

export default PlayerDelete;