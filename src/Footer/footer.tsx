import {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Body from "../Body/Body";
import Login from "../Body/Login";
import Register from "../Body/Register";

class Footer extends Component<any> {
    render() {
        return (
            <div>
                this is a footer div
            </div>
        )
    }
}

export default Footer