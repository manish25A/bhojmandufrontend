import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import logo from '../../../images/logo1.png';
class Register extends Component {
	state = {
		photo:'',
		vendorName: '',
		vendorEmail: '',
		vendorPassword: '',
		vendorAddress: '',
	};
	imageHandler = (e) => {
		this.setState({
		  photo: e.target.files[0],
		});
	  };
	sendUserInfo = (e) => {

		e.preventDefault();

		const formData= new FormData();
		formData.append('photo', this.state.photo)
		formData.append('vendorName', this.state.vendorName)
		formData.append('vendorEmail', this.state.vendorEmail)
		formData.append('vendorPassword', this.state.vendorPassword)
		formData.append('vendorAddress', this.state.vendorAddress)

		const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

		
		axios
			.post('http://localhost:4000/vendor/auth/register', formData, config)
			.then((res) => {
				window.location.href = '/admin/login';
				console.log(res);
			});
	};

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
								<h4>Restaurant Register</h4>
								<h6 className='font-weight-light'>
									Signing up is easy. It only takes a few steps and start
									selling your products
								</h6>
								<form className='pt-3'>
									<div className='form-group'>
										<input
											type='file'
											className='form-control form-control-lg'
											id='exampleInputUsername1'
											placeholder='Photo of restaurant'
											name="photo"
											onChange={this.imageHandler}

										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputUsername1'
											placeholder='Name of restaurant'
											value={this.state.vendorName}
											onChange={(event) => {
												this.setState({ vendorName: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputAddress1'
											placeholder='Complete Address'
											value={this.state.vendorAddress}
											onChange={(event) => {
												this.setState({ vendorAddress: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='email'
											className='form-control form-control-lg'
											id='exampleInputEmail1'
											placeholder='Email'
											value={this.state.vendorEmail}
											onChange={(event) => {
												this.setState({ vendorEmail: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control form-control-lg'
											id='exampleInputPassword1'
											placeholder='Password'
											value={this.state.vendorPassword}
											onChange={(event) => {
												this.setState({ vendorPassword: event.target.value });
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
