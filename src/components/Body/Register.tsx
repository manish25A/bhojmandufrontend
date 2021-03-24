import {Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import {Route} from "react-router";
import {Form, Button} from "react-bootstrap"
import axios from "axios";

class Register extends Component<any> {
    state = {
        customerFName: "",
        customerLName: "",
        customerEmail: "",
        customerPassword: "",
        customerPhone: "",
        customerGender: ""

    }
    sendUserInfo = () => {
        const data = {
            customerFName: this.state.customerFName,
            customerLName: this.state.customerLName,
            customerEmail: this.state.customerEmail,
            customerPhone: this.state.customerPhone,
            customerGender: this.state.customerGender,
            customerPassword: this.state.customerPassword
        }
        axios.post("http://localhost:4000/customer/auth/register", data).then(res => {
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
                                  value={this.state.customerFName}
                                  onChange={(event) => {
                                      this.setState({customerFName: event.target.value})
                                  }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter age" value={this.state.customerLName}
                                  onChange={(event) => {
                                      this.setState({customerLName: event.target.value})
                                  }}/>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.customerEmail}
                                  onChange={(event) => {
                                      this.setState({customerEmail: event.target.value})
                                  }}/>

                </Form.Group>
                <Form.Group >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" value={this.state.customerPhone}
                                  onChange={(event) => {
                                      this.setState({customerPhone: event.target.value})
                                  }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter gender" value={this.state.customerGender}
                                  onChange={(event) => {
                                      this.setState({customerGender: event.target.value})
                                  }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.customerPassword}
                                  onChange={(event) => {
                                      this.setState({customerPassword: event.target.value})
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