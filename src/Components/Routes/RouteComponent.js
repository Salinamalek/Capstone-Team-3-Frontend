import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../Pages/About.js";
import Edit from "../../Pages/Edit.js";
import Error from "../../Pages/Error.js";
import Home from "../../Pages/Home.js";
import Jobs from "../../Pages/Jobs.js";
import JobsShow from "../Job/JobsShow.js";
import NewForm from "../../Pages/NewForm.js";
import User from "../../Pages/User.js";
import Login from "../../Pages/Login.js";
import Register from "../../Pages/Register.js";
import JobProvider from "../../Providers/JobProvider.js";
import Recruiter from "../../Pages/Recruiter.js";
import RegisterRecruiter from "../../Pages/RegisterRecruiter.js";
import LoginRecruiter from "../../Pages/LoginRecruiter.js";
import JobForm from "../../Pages/JobForm.js";
import JobApplicants from "../../Pages/JobApplicants.js";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {/* LOGIN ROUTES */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* USER ROUTES */}
        <Route path="user">
          <Route index element={<User />} />
          <Route path="edit" element={<Edit />} />
          <Route path="new" element={<NewForm />} />
        </Route>
        {/* RECRUITER ROUTES */}
        <Route path="recruiter">
          <Route index element={<Recruiter />} />
          <Route path="register" element={<RegisterRecruiter />} />
          <Route path="login" element={<LoginRecruiter />} />
        </Route>
        {/* JOBS ROUTES */}
        <Route path="jobs">
          <Route index element={<Jobs />} />
          <Route path="new" element={<JobForm />} />
          <Route path=":jobID">
            <Route
              index
              element={
                <JobProvider>
                  <JobsShow />
                </JobProvider>
              }
            />
            <Route path="applicants" element={<JobApplicants />} />
            <Route path="edit" element={<JobForm />} />
          </Route>
        </Route>
        {/* ABOUT ROUTE */}
        <Route path="about" element={<About />} />
        {/* ERROR ROUTES */}
        <Route path="/not-found" element={<Error />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default RouteComponent;
