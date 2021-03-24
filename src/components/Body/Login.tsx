import {Component} from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Register from "./Register";
import {Route} from "react-router";
import axios from "axios";

class Login extends Component<any, any> {
    state = {
        email: "",
        password: ""
    }
    sendLoginInfo = (e) => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        e.preventDefault();
        axios.post("http://localhost:4000/customer/auth/login", data)
            .then(res => {
              localStorage.setItem('token',res.data.token)
              localStorage.setItem('id',res.data.id)
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                                      value={this.state.email}
                                      onChange={(event) => {
                                          this.setState({email: event.target.value})
                                      }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      value={this.state.password}
                                      onChange={(event) => {
                                          this.setState({password: event.target.value})
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


