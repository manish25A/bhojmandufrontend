import React, {Component} from "react";
import {Container,Row,Col} from 'react-bootstrap'
import Register from "./Register";
import {Route} from "react-router";
import Footer from '../Footer/footer'
import Login from '../Body/Login'
class Body extends Component<any, any> {
    render() {
        return (
            <Container>
                    {/*<Route path ='/register' component={Register}>*/}
                    {/* <Register/> */}
                    {/* <Login/> */}

                    {/*</Route>*/}
                    {/* <Footer/> */}
            </Container>
        )
    }
}

export default Body


