import { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Homeproduct.css';
import axios from 'axios';

export default class HomeProduct extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/product/showall')
      .then((response) => {
        console.log(response);
        this.setState({
          products: response.data.ProductData,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div class="container mb-5 mt-5">
        <div class="row">
          <h4 className="my-3">Top Product Of Months</h4>
          {this.state.products.map((b) => {
            return (
              <div class="card mt-3">
                <div class="product-1 align-items-center p-2 text-center">
                  <img
                    src={'http://localhost:90/' + b.ProductImage}
                    alt={b.ProductImage}
                    class="rounded"
                    width="200"
                    height="200"
                  />
                  <h5>{b.ProductName}</h5>
                  <div class="mt-3 info">
                    <span class="text1 d-block">{b.ProductPrice}</span>{' '}
                    <span class="text1">{b.ProductSize} </span>{' '}
                  </div>
                  <div class=" cost mt-3 text-dark">
                    {' '}
                    <span>{b.ProductPrice}</span>
                  </div>
                  {/* <p>
                    <Link to={'/product/update' + b._id}>Update</Link>
                  </p> */}
                  {/* <Link to="/product" class="btn btn-primary pro-button"></Link> */}
                  <div class="p-3 bg-danger text-center text-white mt-3 cursor">
                    {' '}
                    <span class="text-uppercase">
                      Add To Cart
                      {/* <Link to="/product">Add to cart</Link> */}
                    </span>{' '}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
