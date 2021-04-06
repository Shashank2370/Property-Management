import { Button, Container, Typography,makeStyles,TextField } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom'
import React,{useState} from 'react';
import Image from './Image';
import {useDispatch} from 'react-redux';
import { adminLogin } from '../actions/adminActions';
import { userLogin } from "../actions/userActions";


// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//   }));


const Login = ({name}) =>{

        const initialState={
            email:"",
            password:""
        }

        const dispatch =useDispatch();
        const history = useHistory();
        const [formdata, setformdata] = useState(initialState)

        const handlesubmit = (event) => {
            event.preventDefault()

            switch (name) {
                case "admin":
                    dispatch(adminLogin(formdata,history))
                    break;
                
                case "user":
                    dispatch(userLogin(formdata,history))
                    break;
            
                default:
                    break;
            }

        }

        const handlechange = (event) =>{
            setformdata(() => ({...formdata,[event.target.name]:event.target.value}))
        }


        return(
            <div className="centered">

            <div className="form-card">

                <Image name={name} />

                <form onSubmit={handlesubmit}>

                    <div className="row">
                        <div className="col">
                            <input className="form-control" type="email" name="email" placeholder="Email Address" value={formdata.email} onChange={handlechange} required/><br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="password" className="form-control" name="password" placeholder="Password" value={formdata.password} onChange={handlechange} required/><br />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-outline-dark btn-md">Login</button>
                    <Link to="/">
                        <button type="submit" className="btn btn-outline-dark btn-md">Back</button>
                    </Link>

                </form>

            </div>

        </div>
        )
}

export default Login;