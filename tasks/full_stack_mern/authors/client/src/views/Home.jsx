import React from 'react'
import AuthorList from '../components/authors/AuthorList';
import Header from './Header';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header type="main"/>
            </div>
            <div className="row">
                <AuthorList />
            </div>
        </div>
    )
}

export default Home;
