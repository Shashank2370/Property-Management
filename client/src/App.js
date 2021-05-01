import React from "react";
import Login from "./components/Login";
import Home from './components/Home';
import ShowAdmin from './components/Admin/showAdmin'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import AdminNavbar from "./components/Admin/adminNavbar";
import AddAdmin from "./components/Admin/addAdmin";
import AddUser from "./components/Admin/addUser";
import ShowUser from "./components/User/showUser";
import UserNavbar from "./components/User/userNavbar";
import Register from "./components/User/userRegistration";
import UpdateUser from "./components/User/updateUser";
import UpdateUserPassword from "./components/User/updateUserPassword";
import ShowUsers from "./components/Admin/showUsers";
import AddPost from "./components/User/addPost";
import VerifyUser from "./components/User/verifyUser";
import Posts from "./components/User/Posts/posts";

const App = () => {
    
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/adminLogin">
                <Login name="admin" />
            </Route>
            <Route exact path="/user/userLogin">
                <Login name="user" />
            </Route>
            <Route exact path="/user/userRegistration">
                <Register/>
            </Route>
            <Route exact path="/admin/showAdmin">
                <AdminNavbar/>
                <ShowAdmin />
            </Route>
            <Route exact path="/admin/addAdmin">
                <AdminNavbar/>
                <AddAdmin/>
            </Route>
            <Route exact path="/admin/addUser">
                <AdminNavbar/>
                <AddUser/>
            </Route>
            <Route exact path="/admin/showUsers">
                <AdminNavbar/>
                <ShowUsers/>
            </Route>
            <Route exact path="/user/showUser">
                <UserNavbar/>
                <ShowUser />
            </Route>
            <Route exact path="/user/updateUser" >
                    <UserNavbar />
                    <UpdateUser />
            </Route>
            <Route exact path="/user/updateUserPassword" >
                <UserNavbar />
                <UpdateUserPassword />
            </Route>
            <Route exact path="/user/verifyUser" >
                <UserNavbar />
                <VerifyUser />
            </Route>
            <Route exact path="/user/post/addPost" >
                <UserNavbar />
                <AddPost />
            </Route>
            <Route exact path="/user/showPosts" >
                <UserNavbar />
                <Posts />
            </Route>
            <Route exact path="/admin/allPosts" >
                <AdminNavbar />
                <Posts/>
            </Route>
        </Switch>
    </Router>
    )
}

export default App;