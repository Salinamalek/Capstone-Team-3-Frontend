import { Routes, Route, Navigate } from "react-router-dom"
import About from "../../Pages/About.js"
import EditForm from "../../Pages/EditForm.js"
import Error from "../../Pages/Error.js"
import Home from "../../Pages/Home.js"
import Jobs from "../../Pages/Jobs.js"
import JobsShow from "../Job/JobsShow.js"
import NewForm from "../../Pages/NewForm.js"
import User from "../../Pages/User.js"
import Login from "../../Pages/Login.js"
import Register from "../../Pages/Register.js"

function RouteComponent() {
    return (
      <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "login" element = {<Login />} />
            <Route path = "register" element = {<Register />} />
            {/* USER ROUTES */}
            <Route path = "user" >
                <Route index element = {<Navigate to = "/not-found" />} />
                <Route path = "new" element = {<NewForm />} />
                <Route path = ":userID">
                    <Route index  element = {<User />} />
                    <Route path = "edit" element = {<EditForm />} />
                </Route>
            </Route>
            {/* JOBS ROUTES */}
            <Route path = "jobs">
                <Route index element = {<Jobs />} />
                <Route path = ":jobID" element = {<JobsShow />} />
            </Route>
            {/* ABOUT ROUTE */}
            <Route path = "about" element = {<About />} />
            {/* ERROR ROUTES */}
            <Route path = "/not-found" element = {<Error />} />
            <Route path = "*" element = {<Navigate to= "/not-found" />} />
        </Route>
      </Routes>
    );
}

export default RouteComponent;