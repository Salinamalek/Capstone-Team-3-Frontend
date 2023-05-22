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
        {/* JOBS ROUTES */}
        <Route path="jobs">
          <Route index element={<Jobs />} />
          <Route
            path=":jobID"
            element={
              <JobProvider>
                <JobsShow />
              </JobProvider>
            }
          />
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
