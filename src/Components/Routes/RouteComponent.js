import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../Pages/About.js";
import Edit from "../../Pages/Edit.js";
import Error from "../../Pages/Error.js";
import Home from "../../Pages/Home.js";
import Jobs from "../../Pages/Jobs.js";
import JobsShow from "../Job/JobsShow.js";
import User from "../../Pages/User.js";
import JobProvider from "../../Providers/JobProvider.js";
import RecruiterProvider from "../../Providers/RecruiterProvider.js"
import Recruiter from "../../Pages/Recruiter.js";
import RegisterComponent from "../../Pages/RegisterComponent.js";
import RegisterComponent2 from "../../Pages/RegisterComponent2.js"
import LoginComponent from "../../Pages/LoginComponent.js";
import JobForm from "../../Pages/JobForm.js";
import JobApplicants from "../../Pages/JobApplicants.js";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {/* LOGIN ROUTES */}
        <Route path="login" element={<LoginComponent />} />
        <Route path="register" element={<RegisterComponent />} />
        <Route path="register-continue" element={<RegisterComponent2 />} />
        {/* USER ROUTES */}
        <Route path="user">
          <Route index element={<User />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        {/* RECRUITER ROUTES */}
        <Route path="recruiter">
          <Route
            index
            element={
              <RecruiterProvider>
                <Recruiter />
              </RecruiterProvider>
            }
          />
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
            <Route path="edit" element={<JobForm edit={true} />} />
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
