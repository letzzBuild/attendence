import React from 'react';
import LoginPage from './pages/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePasswordPage from './pages/ChangePassword';
import HodDashboard from './pages/HodDashboard';
import StaffDashboard from './pages/StaffDashboard';
import PrincipalDashboard from './pages/PrincipalDashboard';
import AdminDashboard from './pages/AdminDashboard';




export default function App() {
  return (
    <div className="backgroundImage">
      <Router>
        <Switch>
          <Route exact path="/">
          <LoginPage />
          </Route>
          <Route exact path="/staffdashboard">
          <StaffDashboard />
          </Route>
          <Route exact path="/admindashboard">
          <AdminDashboard />
          </Route>
          <Route exact path="/hoddashboard">
          <HodDashboard />
          </Route>
          <Route exact path="/principaldashboard">
          <PrincipalDashboard />
          </Route>
          <Route exact path="/changepassword">
          <ChangePasswordPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


