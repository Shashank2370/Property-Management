import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import Image from '../Image';
import FileBase from 'react-file-base64';
import { addPost } from "../../actions/postActions";


const AddPost = () => {

    const id = JSON.parse(localStorage.getItem("profile")).result._id

    const initialState = {
        name:"",
        address:"",
        location: {
            latitude:"",
            longitude:""
        },
        city:"",
        state:"",
        document:"",
        description:""
    }

    const [formdata, setformdata] = useState(initialState);
    const handleChange = (event) => {
        setformdata(() => ({...formdata,[event.target.name]:event.target.value}))
    }

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addPost(id,formdata));
    }

    return (
        <div className="centered">

        <div className="form-card">

            <Image name="documents" />

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-outline-dark btn-md">Add Location</button>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="name" placeholder="Name of Owner" value={formdata.name} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="address" placeholder="Property Address" value={formdata.address} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="city" placeholder="City" value={formdata.city} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="state" placeholder="State" value={formdata.state} onChange={handleChange} required/><br />
                    </div>
                </div>

                <div className="row">
                    <div className='col'>
                        <label className="form-control" ><h6>Select Files :</h6>
                            {/* <input type="file" className="form-control" name="document" value={formdata.document} onChange={handleChange} required/> */}
                            <FileBase 
                                    type="file"
                                    multiple={false}
                                    onDone={({base64})=>setformdata({...formdata,document:base64})}
                            />
                        </label>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="description" placeholder="Property Description" value={formdata.description} onChange={handleChange} required/><br />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-dark btn-md">Add Post</button>

            </form>

        </div>

    </div>
    );
}
export default AddPost;
