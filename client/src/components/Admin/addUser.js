import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import Image from '../Image'
import { addUser } from "../../actions/adminActions";

const AddUser = () => {

    const initialState = {
        firstName:"",
        lastName:"",
        email:"",
        contactnumber:"",
        aadhar:"",
        gender:"",
        city:"",
        state:"",
        password:"",
        confirmPassword:""
    };

    const [formdata, setformdata] = useState(initialState);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setformdata(() => ({...formdata,[event.target.name]:event.target.value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addUser(formdata));
    } 

    return (
        <div className="centered">

        <div className="form-card">

            <Image name="user" />

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="firstName" placeholder="First Name" value={formdata.firstName} onChange={handleChange} required/><br />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={formdata.lastName} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="email" className="form-control" name="email" placeholder="Email Address" value={formdata.email} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="contactnumber" placeholder="Contact Number" value={formdata.contactnumber} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="aadhar" placeholder="Aadhar Number" value={formdata.aadhar} onChange={handleChange} required/><br />
                    </div>
                    <div className="col">
                            <select className="form-select" name="gender" onChange={handleChange} required>
                                <option value="" defaultValue hidden >Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="city" placeholder="City" value={formdata.city} onChange={handleChange} required/><br />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name="state" placeholder="State" value={formdata.state} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="password" className="form-control" name="password" placeholder="Password" value={formdata.password} onChange={handleChange} required/><br />
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={formdata.confirmPassword} onChange={handleChange} required/><br />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-dark btn-md">Add</button>

            </form>

        </div>

    </div>
    );
}

export default AddUser;