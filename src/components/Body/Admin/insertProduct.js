import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import logo from '../../../images/logo1.png';
class InsertProducts extends Component {
	state = {
		name: '',
		desc: '',
		price: '',
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('resToken')}`,
			},
		},
	};
	sendUserInfo = () => {
		const data = {
			name: this.state.name,
			price: this.state.price,
			desc: this.state.desc,
		};
		axios
			.post('http://localhost:4000/product/', data, this.state.config)
			.then((res) => {});
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
								<h4>Insert Your Products</h4>
								<h6 className='font-weight-light'>
									Insert is wisely, although you can update them later
								</h6>
								<form className='pt-3'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputUsername1'
											placeholder='Name'
											value={this.state.name}
											onChange={(event) => {
												this.setState({ name: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='number'
											className='form-control form-control-lg'
											id='exampleInputEmail1'
											placeholder='Price'
											value={this.state.price}
											onChange={(event) => {
												this.setState({ price: event.target.value });
											}}
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control form-control-lg'
											id='exampleInputDescription'
											placeholder='Description'
											value={this.state.desc}
											onChange={(event) => {
												this.setState({ desc: event.target.value });
											}}
										/>
									</div>
									<div className='mt-3'>
										<Link
											className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
											onClick={this.sendUserInfo}
										>
											Insert
										</Link>
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

export default InsertProducts;
