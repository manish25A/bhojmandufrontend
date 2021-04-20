import { Component } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';

toast.configure();
export default class EditProduct extends Component {
	state = {
		singleProduct: {},
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('resToken')}`,
			},
		},
		id: this.props.match.params.id,
		name: '',
		desc: '',
		price: '',
	};
	updateProduct = (e) => {
		e.preventDefault();
		const updateProductData = {
			name: this.state.name,
			desc: this.state.desc,
			price: this.state.price,
		};
		console.log(updateProductData);
		axios
			.put(
				'http://localhost:4000/product/update/' + this.state.id,
				updateProductData,
				this.state.config
			)
			.then((response) => {
				toast.success('Successfully Updated Product', {
					draggable: true,
					autoClose: 3000,
					position: toast.POSITION.TOP_RIGHT,
				});
			})
			.catch((err) => {
				console.log(err.response);
				toast.warn('Unable Updated Product', {
					draggable: true,
					autoClose: 3000,
					position: toast.POSITION.TOP_RIGHT,
				});
			});
	};
	componentDidMount() {
		console.log(this.state.id);
		axios
			.get('http://localhost:4000/product/' + this.state.id, this.state.config)
			.then((res) => {
				console.log(res);
				console.log(res.data.data.name);
				this.setState({
					name: res.data.data.name,
					desc: res.data.data.desc,
					price: res.data.data.price,
				});
			})
			.catch((err) => {
				console.log(err.res);
			});
	}

	render() {
		return (
			<div class='container tm-mt-big tm-mb-big'>
				<div class='row'>
					<div class='col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto'>
						<div class='tm-bg-primary-dark tm-block tm-block-h-auto'>
							<div class='row'>
								<div class='col-12'>
									<h2 class='tm-block-title d-inline-block'>Update Product</h2>
								</div>
							</div>
							<div class='row tm-edit-product-row'>
								<div class='col-xl-6 col-lg-6 col-md-12'>
									<form action='' class='tm-edit-product-form'>
										<div class='form-group mb-3'>
											<label for='ProductName'>Product Name</label>
											<input
												name='ProductName'
												type='text'
												class='form-control validate'
												placeholder='Insert Product Name'
												required
												value={this.state.name}
												onChange={(event) =>
													this.setState({ name: event.target.value })
												}
											/>
										</div>

										<div class='row'>
											<div class='form-group mb-3 col-xs-12 col-sm-6'>
												<label for='Price'>Price</label>
												<input
													id='ProductPrice'
													name='ProductPrice'
													type='text'
													class='form-control validate'
													data-large-mode='true'
													placeholder='Insert Product Price'
													value={this.state.price}
													onChange={(event) =>
														this.setState({ price: event.target.value })
													}
												/>
											</div>

											<div class='form-group mb-3'>
												<label for='ProductDescription'>Description</label>
												<textarea
													id='ProductDescription'
													name='ProductDescription'
													type='text'
													class='form-control validate'
													rows='3'
													required
													value={this.state.desc}
													onChange={(event) =>
														this.setState({
															desc: event.target.value,
														})
													}
												></textarea>
											</div>
										</div>
										<div class='col-12'>
											<button
												type='submit'
												class='btn btn-primary btn-block text-uppercase'
												onClick={this.updateProduct}
											>
												Update Product Now
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<h2></h2>
				</div>
			</div>
		);
	}
}
