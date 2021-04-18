import React,{useState,useEffect} from 'react';
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { adminLogout } from "../../actions/adminActions";


const AdminNavbar =() =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const data = JSON.parse(localStorage.getItem("profile"));
    const [name, setname] = useState(`${data.result.firstName} ${data.result.lastName}`)

    const handleClick = () =>{
        dispatch(adminLogout(history));
        setname(null);
    }

    useEffect(() => {
        const token = data?.token;
        // console.log("expried");
        //console.log(token);

        if(token){
            const decodedData = decode(token);
            //console.log("IF");
            if(decodedData.exp * 1000 < new Date().getTime())
                handleClick();
        }

        setname(`${data.result.firstName} ${data.result.lastName}`);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":"#37B5B0"}}>

            <div className="container-fluid">

                <h4 className="navbar-brand">Property Management</h4>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#burgerSymbol">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="burgerSymbol">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/showAdmin">{name}</Link>
                        </li>

                        {/* <li className="nav-item dropdown">

                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Add
                            </a>

                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admin/addUser">Add User</Link></li>
                                <li><Link className="dropdown-item" to="/admin/addAdmin">Add Admin</Link></li>
                            </ul>

                        </li>
                         */}

                        <li className="nav-item">
                            <Link className='nav-link' to="/admin/addUser">Add User</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to="/admin/addAdmin">Add Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={()=>{}} to="/admin/showUsers">Users</Link>
                        </li>

                        <li className="nav-item">
                            <button className="btn btn-outline-info btn-md" onClick={handleClick} >Log Out</button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    )
}
export default AdminNavbar;