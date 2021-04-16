import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import logo from '../../../images/logo1.png';
import axios from 'axios';
import { toast } from 'react-toastify';
export class Login extends Component {
	state = {
		email: '',
		password: '',
		LoginSucces: false,
	};
	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitLogin = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/customer/auth/login', this.state)
			.then((response) => {
				console.log(response);
				localStorage.setItem('customerToken', response.data.token);
				localStorage.setItem('id', response.data.id);
				localStorage.setItem('role', response.data.role);
				toast('Login Successful ');
				window.location.href = '/';
				this.setState({ LoginSucces: true });
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	render() {
		const token = localStorage.getItem('token');
		if (token) {
			return <Redirect to='/' />;
		}
		return (
			<div>
				<div className='d-flex align-items-center auth px-0'>
					<div className='row w-100 mx-0'>
						<div className='col-lg-4 mx-auto'>
							<div className='auth-form-light text-left py-5 px-4 px-sm-5'>
								<div className='brand-logo'>
									<img
										alt='logo'
										src={logo}
										style={{ width: 100, height: 80, marginTop: -18 }}
									/>
								</div>
								<h4>Hello! let's get started</h4>
								<h6 className='font-weight-light'>Sign in to continue.</h6>
								<Form className='pt-3'>
									<Form.Group className='d-flex search-field'>
										<Form.Control
											type='email'
											placeholder='email'
											size='lg'
											className='h-auto'
											value={this.state.email}
											onChange={(event) => {
												this.setState({ email: event.target.value });
											}}
										/>
									</Form.Group>
									<Form.Group className='d-flex search-field'>
										<Form.Control
											type='password'
											placeholder='Password'
											size='lg'
											className='h-auto'
											value={this.state.password}
											onChange={(event) => {
												this.setState({ password: event.target.value });
											}}
										/>
									</Form.Group>
									<div className='mt-3'>
										<Link
											className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
											onClick={this.submitLogin}
										>
											SIGN IN
										</Link>
									</div>
									<div className='my-2 d-flex justify-content-between align-items-center'>
										<div className='form-check'>
											<label className='form-check-label text-muted'>
												<input type='checkbox' className='form-check-input' />
												<i className='input-helper'></i>
												Keep me signed in
											</label>
										</div>
										<a
											href='!#'
											onClick={(event) => event.preventDefault()}
											className='auth-link text-black'
										>
											Forgot password?
										</a>
									</div>
									<div className='mb-2'>
										<button
											type='button'
											className='btn btn-block btn-facebook auth-form-btn'
										>
											<i className='mdi mdi-facebook mr-2'></i>Connect using
											facebook
										</button>
									</div>
									<div className='text-center mt-4 font-weight-light'>
										Don't have an account?{' '}
										<Link to='/body/register' className='text-primary'>
											Create
										</Link>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
