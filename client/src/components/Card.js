import React from 'react';
import Image from './Image'
import {Link} from 'react-router-dom'

const Card = ({name}) =>{
    return (
        <div className="card col-lg-6">
            <div className="main-card">
                <Image name={name} />
                <Link to={`/${name}/${name}Login`}>
                    <button type="button" className="btn btn-outline-success btn-md btn-main">Login</button>
                </Link>
                {name=="user" && 
                    (
                        <Link to={'/user/userRegistration'}>
                            <button type="button" className="btn btn-outline-info btn-md btn-main">Register</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Card;