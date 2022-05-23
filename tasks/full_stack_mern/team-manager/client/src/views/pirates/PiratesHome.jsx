import React from 'react'
import PiratesList from '../../components/pirates/PiratesList';
import Header from '../Header';

const PiratesHome = () => {
    return (
        <div className="view">
            <Header title="Pirate Crew" screen="list" />
            <PiratesList />
        </div>
    )
}

export default PiratesHome