import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import AdminPage from "./components/Admin/AdminPage";
import AdminRoutes from "./components/Admin/AdminRoutes";
import UserPage from "./components/UserPage/UserPage";

import   ABC from "./indeex";
//import Login from "./components/login";
import Login from "./components/login/Login";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<ABC/>}/>
          <Route path="/user" element={<UserPage/>}/>
            <Route path=":path" element={<AdminRoutes/>}/>
            <Route/>
         
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route path=":path" element={<AdminRoutes />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
