import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Register from './Register';
import { Route } from 'react-router';
import Footer from '../Footer/footer';
import Login from '../Body/Login';
import Home from './Home/home';

class Body extends Component {
	render() {
		return (
			<main>
				<Home />
			</main>
		);
	}
}

export default Body;
