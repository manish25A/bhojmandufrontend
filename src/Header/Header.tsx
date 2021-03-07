import {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from "../Body/Register";
import Login from "../Body/Login";

class Header extends Component<any> {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
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
                        <Route path="/register">
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