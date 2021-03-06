import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import logo from '../../../images/logo1.png';
import { toast } from 'react-toastify';
class Register extends Component {
	state = {
		fname: '',
		lname: '',
		number: '',
		email: '',
		password: '',
	};
	sendUserInfo = () => {
		const data = {
			fname: this.state.fname,
			lname: this.state.lname,
			email: this.state.email,
			number: this.state.number,
			password: this.state.password,
		};
		axios
			.post('http://localhost:4000/customer/auth/register', data)
			.then((res) => {
				window.location.href = '/body/login';
				toast('registered Successfully')
				})
				.catch((response,err) => {
					toast("Please enter every data correctly")
			},)};
	render() {
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
								<h4>New here?</h4>
								<h6 className='font-weight-light'>
									Signing up is easy. It only takes a few steps
								</h6>
								<form className='pt-3'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputUsername1'
											placeholder='Full Name'
											value={this.state.fname}
											onChange={(event) => {
												this.setState({ fname: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputEmail1'
											placeholder='Last Name'
											value={this.state.lname}
											onChange={(event) => {
												this.setState({ lname: event.target.value });
											}}
										/>
									</div><div className='form-group'>
										<input
											type='text'
											
										
											className='form-control form-control-lg'
											id='exampleInputEmail11'
											placeholder='Number'
											value={this.state.number}
											onChange={(event) => {
												this.setState({ number: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='email'
											className='form-control form-control-lg'
											id='exampleInputEmail1'
											placeholder='Email'
											value={this.state.email}
											onChange={(event) => {
												this.setState({ email: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control form-control-lg'
											id='exampleInputPassword1'
											placeholder='Password'
											value={this.state.password}
											onChange={(event) => {
												this.setState({ password: event.target.value });
											}}
										/>
									</div>
									<div className='mb-4'>
										<div className='form-check'>
											<label className='form-check-label text-muted'>
												<input type='checkbox' className='form-check-input' />
												<i className='input-helper'></i>I agree to all Terms &
												Conditions
											</label>
										</div>
										<div className='mt-3'>
											<Link
												className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
												onClick={this.sendUserInfo}
											>
												SIGN UP
											</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
