import {Component} from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Register from "./Register";
import {Route} from "react-router";
import axios from "axios";

class Login extends Component<any, any> {
    state = {
        customerEmail: "",
        customerPassword: ""
    }
    sendLoginInfo = () => {
        const data = {
            customerEmail: this.state.customerEmail,
            customerPassword: this.state.customerPassword
        }
        axios.post("http://localhost:5000/customer/auth/login", data).then(res => {
            console.log(res)
            console.log(data)
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                                      value={this.state.customerEmail}
                                      onChange={(event) => {
                                          this.setState({customerEmail: event.target.value})
                                      }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      value={this.state.customerPassword}
                                      onChange={(event) => {
                                          this.setState({customerPassword: event.target.value})
                                      }}/>
                    </Form.Group>
                    <Button onClick={this.sendLoginInfo} >
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login


