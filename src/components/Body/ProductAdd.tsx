import {Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import {Route} from "react-router";
import {Form, Button} from "react-bootstrap"
import axios from "axios";

class ProductAdd extends Component<any> {
    state = {
        name: "",
        desc: "",
        price: "",
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        }
    }
    sendProduct= () => {
        const data = {
            name: this.state.name,
            desc: this.state.desc,
            price: this.state.price,
            vendorId:localStorage.getItem('id')
        }
        axios.post("http://localhost:4000/product/", data,this.state.config).then(res => {
            console.log(res)
            console.log(data)
        })
    }


    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                                  value={this.state.name}
                                  onChange={(event) => {
                                      this.setState({name: event.target.value})
                                  }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={this.state.desc}
                                  onChange={(event) => {
                                      this.setState({desc: event.target.value})
                                  }}/>

                </Form.Group>
                <Form.Group >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={this.state.price}
                                  onChange={(event) => {
                                      this.setState({price: event.target.value})
                                  }}/>
                </Form.Group>
                <Button onClick={this.sendProduct}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ProductAdd