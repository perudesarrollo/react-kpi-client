import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClienteApp from "../page/ClienteApp";
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRouters() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" width="30" height="24" />
              Clientes
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <ClienteApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
