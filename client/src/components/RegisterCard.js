import React from 'react';
import Image from './Image';
import {Link} from 'react-router-dom';

const RegisterCard = () => {
    return (
        <div className="card col-lg-4">
        <div className="main-card">
            <Image name="user" />
            <Link to={`/user/userRegistration`}>
                <button type="button" className="btn btn-outline-dark btn-md btn-main">Register</button>
            </Link>
        </div>
    </div>
    )
}
export default RegisterCard;