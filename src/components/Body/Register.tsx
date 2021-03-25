import {Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import {Route} from "react-router";
import {Form, Button} from "react-bootstrap"
import axios from "axios";

class Register extends Component<any> {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",

    

    }
    sendUserInfo = () => {
        const data = {
            customerFName: this.state.fname,
            customerLName: this.state.lname,
            customerEmail: this.state.email,
            customerPhone: this.state.password,
        }
        axios.post("http://localhost:5000/customer/auth/register", data).then(res => {
            console.log(res)
            console.log(data)
        })
    }


    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>CustomerFullName</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                                  value={this.state.fname}
                                  onChange={(event) => {
                                      this.setState({fname: event.target.value})
                                  }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter age" value={this.state.lname}
                                  onChange={(event) => {
                                      this.setState({lname: event.target.value})
                                  }}/>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                  onChange={(event) => {
                                      this.setState({email: event.target.value})
                                  }}/>

                </Form.Group>
                <Form.Group >
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={this.state.password}
                                  onChange={(event) => {
                                      this.setState({password: event.target.value})
                                  }}/>
                </Form.Group>

                <Button onClick={this.sendUserInfo}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Register