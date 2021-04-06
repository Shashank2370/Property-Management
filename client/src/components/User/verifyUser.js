import React,{useState} from "react";
import Image from '../Image';
import {Link,useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { verifyUser } from "../../actions/userActions";

const VerifyUser = () => {

    const initialState = {
        email:"",
        password:"",
        contactnumber:"",
        aadhar:""
    }

    const [formdata, setformdata] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleChange = (event) => {
        setformdata(() => ({...formdata,[event.target.name]:event.target.value}))

    }
    const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(verifyUser(formdata,history));
    }

        return (
            <div className="centered">

            <div className="form-card">
    
                <Image name="documents" />
    
                <form onSubmit={handleSubmit}>
    
                    <div className="row">
                        <div className="col">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" value={formdata.email} onChange={handleChange} required/><br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="aadhar" placeholder="Aadhar Number" value={formdata.aadhar} onChange={handleChange} required/><br />
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="contactnumber" placeholder="Contact Number" value={formdata.contactnumber} onChange={handleChange} required/><br />
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col">
                            <input type="password" className="form-control" name="password" placeholder="Password" value={formdata.password} onChange={handleChange} required/><br />
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-outline-dark btn-md">Next</button>
                    <Link to="/">
                            <button type="submit" className="btn btn-outline-dark btn-md">Back</button>
                    </Link>
    
                </form>
    
            </div>
    
        </div>
        );
}
export default VerifyUser;