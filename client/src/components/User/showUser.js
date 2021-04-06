import React from "react";
import Image from '../Image'

const ShowUser = () => {

    const data = JSON.parse(localStorage.getItem("profile")).result;

    return (
        <div className="centered">

        <div className="form-table">

            <Image name="user" />

            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">First Name</th>
                    <td>{data.firstName}</td>
                </tr>
                <tr>
                    <th scope="row">Last Name</th>
                    <td>{data.lastName}</td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>{data.email}</td>
                </tr>
                </tbody>
            </table>

        </div>

    </div>
    )
}
export default ShowUser;