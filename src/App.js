import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Body/Register/index';
import Footer from './components/Footer/footer';
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Header/Navbar/';
import Home from './components/Body/Home/home';
import Login from './components/Body/Login/Login';
import HomePage from './components/Body/Home';
import CartPage from './components/Cart/CartPage';
import Products from './components/Body/Product/';
import SingleProductPage from './components/Body/Product/SingleProduct/SingleProductPage';
import Dashboard from './components/Dashboard';


import ResDashboard from './components/Body/Admin/dashboard';
import login from './components/Body/Admin/login';
import register from './components/Body/Admin/register';
import AdminProducts from './components/Body/Admin/yourProducts';
import InsertProducts from './components/Body/Admin/insertProduct';
import UpdateProducts from './components/Body/Admin/updateProduct';
const resToken = localStorage.getItem('resToken');
const customerToken = localStorage.getItem('customerToken');


function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />


				<Route exact path='/' component={HomePage} />
				<Route exact path='/body/register' component={Register} />
				<Route exact path='/get/product' component={Products} />

				<Route exact path='/body/login' component={Login} />



				{!customerToken && resToken ? (
					<Redirect to="/body/login" />

				) : (
					<Route exact path='/cart' component={CartPage} />

				)
				}
				{!customerToken && resToken ? (
					<Redirect to="/body/login" />

				) : (
					<Route exact path='/user/dashboard' component={Dashboard} />

				)
				}
				{!customerToken && resToken ? (
					<Redirect to="/body/login" />
				) : (
					<Route exact path='/single/product/:id' component={SingleProductPage} />

				)
				}
				{/* admin sites */}


				<Route exact path='/admin/login' component={login} />
				<Route exact path='/admin/register' component={register} />
				{customerToken=="undefined" && !resToken ? (
					<Redirect to="/admin/login" />
				) : (
					<Route exact path='/admin/dashboard' component={ResDashboard} />

				)
				}
				{customerToken=="undefined" && !resToken ? (
					<Redirect to="/admin/login" />
				) : (
					<Route exact path='/admin/product' component={AdminProducts} />

				)
				}		{customerToken=="undefined" && !resToken ? (
					<Redirect to="/admin/login" />
				) : (
					<Route exact path='/admin/insert/products' component={InsertProducts} />

				)
				}	{customerToken=="undefined" && !resToken ? (
					<Redirect to="/admin/login" />
				) : (
					<Route exact path='/admin/update/:id' component={UpdateProducts} />

				)
				}
			

				<Footer />
			</div>
		</Router>
	);
}

export default App;
