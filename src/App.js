import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Body/Register/index';
import Footer from './components/Footer/footer';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Header/Navbar/';
import Home from './components/Body/Home/home';
import Login from './components/Body/Login/Login';
import HomePage from './components/Body/Home';
// import ProductAdd from './components/Body/ProductCRUD/ProductGet';
import CartPage from './components/Cart/CartPage';
import Products from './components/Body/Product/';
import SingleProductPage from './components/Body/Product/SingleProduct/SingleProductPage';
import Dashboard from './components/Dashboard';
// import GetProducts from './components/GetProducts/GetProducts';

// import { App as product } from './components/GetProducts/app';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/body/register' component={Register} />
				{/* <Route exact path='/get/products' component={GetProducts} /> */}
				<Route exact path='/body/login' component={Login} />
				<Route exact path='/cart' component={CartPage} />

				<Route exact path='/get/product' component={Products} />
				<Route exact path='/user/dashboard' component={Dashboard} />
				<Route exact path='/single/product/:id' component={SingleProductPage} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
