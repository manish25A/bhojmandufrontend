import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Body/Register';
import Footer from './components/Footer/footer';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Header/Navbar/';
import Home from './components/Body/Home/home';
import Login from './components/Body/Login';
import GetProducts from './components/GetProducts/';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route exact path='/body/register' component={Register} />
				<Route exact path='/get/products' component={GetProducts} />
				<Route exact path='/body/login' component={Login} />
			</div>
		</Router>
	);
}

export default App;
