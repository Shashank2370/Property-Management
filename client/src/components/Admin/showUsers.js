import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {showUsers} from '../../actions/adminActions';

const ShowUsers = () => {

    const state = useSelector(state => state.dataReducers.data)
    //console.log(state);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(showUsers());

    }, [dispatch])

  const [datas, setDatas] = useState([]);
  const [sortType, setSortType] = useState();

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       firstName: 'firstName',
  //       city: 'city'
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...state].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setDatas(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]); 

    return  (
        <div className="form-table">

                <div className="row "> 
                    <div className="col">
                    <button type="submit" className="btn btn-outline-dark btn-md" value="firstName" onChange = {(event) => setSortType(event.target.value)}>Sort By Name</button>
                    </div>
                    <div className="col">
                    <button type="submit" className="btn btn-outline-dark btn-md" value="city" onChange = {(event) => setSortType(event.target.value)}>Sort By City</button>
                    </div>
                </div>

        
        <table className="table">

          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Contact Number</th>
            </tr>
          </thead>

          <tbody>
          
            {
              state &&
              (
                  state.map((data, index) => (
                  <tr key={data?._id}>
                    <th scope="row">{index+1}</th>
                    <td>{`${data?.firstName} ${data?.lastName}`}</td>
                    <td>{data?.city}</td>
                    <td>{data?.contactnumber}</td>
                  </tr>
                ))
              )
            }

          </tbody>

        </table>

      </div>

    );
}
export default ShowUsers;