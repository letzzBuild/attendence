import React from 'react';
import LoginPage from './pages/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePasswordPage from './pages/ChangePassword';


export default function App() {
  return (
    <div className="backgroundImage">
      <Router>
        <Switch>
          <Route exact path="/">
          <LoginPage />
          </Route>
          <Route exact path="/changepassword">
          <ChangePasswordPage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}


