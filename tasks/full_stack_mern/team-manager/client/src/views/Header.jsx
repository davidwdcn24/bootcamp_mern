import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {

    return (
        <div className="App-header">
            <Link to="/players/list">Manage Players</Link> |{" "}
            <Link to="/status/game/1">Manage Player Status</Link>
        </div>
    )
}

export default Header