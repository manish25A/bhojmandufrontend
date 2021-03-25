import React, { useState, useEffect }  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Body from "../Body/Body";
import Login from "../Body/Login";
import Register from "../Body/Register";
import Footer from "../Footer/footer"
import Header from "../Header/Header";
import ProductAdd from "../Body/ProductAdd";
import { Button } from "react-bootstrap";
import './Header.css';
import logo from "./static/logo1.png";

function NavBarApp(){
    return(
        /*
     * <> or empty tags to send multiple elements or group of children
     */
    <>
     
    <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/body/register' component={Register} />
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/register' component={Register} />
        </Switch>
    </Router>

</>
)}
export default NavBarApp;