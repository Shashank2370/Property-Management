import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Image from '../Image';
import { updateUserPassword } from "../../actions/userActions";

const UpdateUserPassword = () => {

    const initialState = {
        password:"",
        newPassword:"",
        confirmPassword:""
    }

    const initialdata = JSON.parse(localStorage.getItem("profile")).result;
    const id = initialdata._id;

    const [formdata, setformdata] = useState(initialState)

    const handleChange = (event) => {
        setformdata(() => ({...formdata,[event.target.name]:event.target.value}));
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(updateUserPassword(id,formdata,history));
    }


    return (
        <div className="centered">

        <div className="form-card">

            <Image name="password" />

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                        <input className="form-control" type="password" name="password" placeholder="Current Password" onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input className="form-control" type="password" name="newPassword" placeholder="New Password" onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required/><br />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-dark btn-md">Update</button>

            </form>

        </div>

    </div>
    );
}

export default UpdateUserPassword;
