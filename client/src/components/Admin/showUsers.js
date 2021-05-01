import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {showUsers} from '../../actions/adminActions';

const ShowUsers = () => {

    const users = useSelector(state => state.dataReducers.data)
    //console.log(state);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(showUsers());

    }, [dispatch])

  const [datas, setDatas] = useState([]);
  const [sortbool, setsortbool] = useState(true)
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
  

  const handlesortName = () => {
    users.sort((a, b) => a.firstName.localeCompare(b.firstName))
    //console.log(users);
    setDatas(users)
    setsortbool(!sortbool)
 }

 const handlesortCity = () => {
   users.sort((a, b) => a.city.localeCompare(b.city))
   //console.log(users);
   setDatas(users)
   setsortbool(!sortbool)
}

// console.log(users);

    return  (
        <div className="form-table">

                <div className="row "> 
                    <div className="col">
                    <button type="submit" className="btn btn-outline-warning btn-md" value="firstName" onClick = {handlesortName}>Sort By Name</button>
                    </div>
                    <div className="col">
                    <button type="submit" className="btn btn-outline-warning btn-md" value="city" onClick = {handlesortCity}>Sort By City</button>
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
              sortbool ?
              (
                users && (
                  users.map((data, index) => (
                  <tr key={data?._id}>
                    <th scope="row">{index+1}</th>
                    <td>{`${data?.firstName} ${data?.lastName}`}</td>
                    <td>{data?.city}</td>
                    <td>{data?.contactnumber}</td>
                  </tr>
                ))
                )
              ):(
                  datas.map((data, index) => (
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