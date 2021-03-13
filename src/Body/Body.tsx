import {Component} from "react";
import {Container,Row,Col} from 'react-bootstrap'
import Register from "./Register";
import {Route} from "react-router";

class Body extends Component<any, any> {
    render() {
        return (
            <Container>
                    {/*<Route path ='/register' component={Register}>*/}
                    {/* <Register>*/}

                    {/* </Register>*/}
                    {/*</Route>*/}
            </Container>
        )
    }
}

export default Body


