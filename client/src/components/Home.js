import React from 'react';
import Card from "./Card"
import {Container} from '@material-ui/core'
import RegisterCard from './RegisterCard';

const Home = () => {
    return (

        <div className="centered">

            <div className="row">

                <div className="col-lg-12">
                    <h1 id="main-heading" className="display-5">Property Management</h1>
                </div>

                <Card name="admin" />
                <Card name="user" />

            </div>

        </div>
    );
}

export default Home;