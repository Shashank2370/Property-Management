import React,{useState,useEffect} from 'react';
import decode from 'jwt-decode';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {Link,useHistory} from 'react-router-dom';
import { userLogout,userDelete } from "../../actions/userActions";
import { getPosts } from "../../actions/postActions";

const UserNavbar = () => {

    const data  = JSON.parse(localStorage.getItem("profile"));
    const [name, setname] = useState(`${data.result.firstName} ${data.result.lastName}`)

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleClick = () =>{
        dispatch(userLogout(history));
        setname(null);
    }

    const handleDelete=() =>{
        dispatch(userDelete(data.result._id,history));
        setname(null);
    }


    useEffect(() => {
        const token = data?.token;
        //console.log(token);

        if(token){
            const decodedData = decode(token);
            if(decodedData.exp * 1000 < new Date().getTime())
                handleClick();
        }

        setname(`${data.result.firstName} ${data.result.lastName}`);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color":"#9C953E"}}>

            <div className="container-fluid">

                <h4 className="navbar-brand">Property Management</h4>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#burgerSymbol">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="burgerSymbol">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/user/showUser">{name}</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/user/verifyUser">Add Post</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/user/showPosts" onClick = {()=> dispatch(getPosts(data.result._id))}>Posts</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/user/updateUser">Update Profile</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/user/updateUserPassword">Update Password</Link>
                        </li>

                        <li className="nav-item">
                            <button className="btn btn-outline-info btn-md" onClick={handleClick} >Log Out</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleDelete} >Delete Account</button>
                        </li>
                        
                    </ul>

                </div>

            </div>

        </nav>
    )
}
export default UserNavbar;