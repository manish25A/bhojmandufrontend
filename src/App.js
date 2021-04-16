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
// import { Map } from './components/Body/Admin/maps';

import ResDashboard from './components/Body/Admin/dashboard';
import login from './components/Body/Admin/login';
import register from './components/Body/Admin/register';
import AdminProducts from './components/Body/Admin/yourProducts';
import InsertProducts from './components/Body/Admin/insertProduct';
import UpdateProduct from './components/Body/Admin/updateProduct';
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
				{/* <Route exact path='/location' component={Map} /> */}

				<Route exact path='/get/product' component={Products} />
				<Route exact path='/user/dashboard' component={Dashboard} />
				<Route exact path='/single/product/:id' component={SingleProductPage} />

				<Route exact path='/admin/dashboard' component={ResDashboard} />
				<Route exact path='/admin/login' component={login} />
				<Route exact path='/admin/register' component={register} />
				<Route exact path='/admin/product' component={AdminProducts} />
				<Route exact path='/admin/insert/products' component={InsertProducts} />
				<Route exact path='/admin/update/:id' component={UpdateProduct} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
