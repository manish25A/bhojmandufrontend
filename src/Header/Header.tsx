import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import Login from "../Body/Login";
import Footer from "../Footer/footer"
import Register from "../Body/Register";

class Header extends Component<any> {
    render() {
        return (

            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/body/Register">Register</Nav.Link>
                            <Nav.Link href="/login">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/body/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/footer/home">
                                Footer
                            </Link>
                        </li>
                    </ul>

                    <hr/>

                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route path="/footer/home">
                            <Footer/>
                        </Route>
                        <Route path="/body/register">
                            <Register/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header