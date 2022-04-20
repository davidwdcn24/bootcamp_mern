import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Navbar = () => {
    const context = useContext(UserContext);

    return (
        <nav className='navbar navbar-light bg-light bg-coding-dojo'>
            <div className='w-100'>
                <span className='navbar-text ct-coding-dojo float-end me-3'>Hola {context.userName}!</span>
            </div>
        </nav>
    )
}

export default Navbar;