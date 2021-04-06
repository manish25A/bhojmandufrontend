// import { Component } from 'react';
// import { Form, FormGroup, Button, FormLabel } from 'react-bootstrap';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';

// const option = [
// 	{
// 		label: 'choose__type',
// 	},
// 	{
// 		label: 'Gadget',
// 		value: 'Gadget',
// 	},
// 	{
// 		label: 'Automobile',
// 		value: 'Automobile',
// 	},
// ];
// class SingleProductPage extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: '',
// 			price: '',
// 			desc: '',
// 			producttype: '',
// 			biddingtime: '',
// 			productdescription: '',
// 			productimage: '',
// 			vendorName: this.props.match.params.vendorName,
// 		};
// 		this.updateProduct = this.updateProduct.bind(this);
// 		this.deleteProduct = this.deleteProduct.bind(this);
// 	}
// 	changeHandler = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 		});
// 	};
// 	componentDidMount() {
// 		this.retriveProductDetail();
// 	}
// 	retriveProductDetail = () => {
// 		axios
// 			.get('http://localhost:4000/product/getProducts/' + this.state.vendorName)

// 			.then((response) => {
// 				this.setState({
// 					name: response.data.data.name,
// 					desc: response.data.data.desc,
// 					price: response.data.data.price,
// 					producttype: response.data.data.producttype,
// 					biddingtime: response.data.biddingtime,
// 					productdescription: response.data.productdescription,
// 					productimage: response.data.productimage,
// 				});
// 			});
// 	};
// 	deleteProduct = () => {
// 		axios
// 			.delete('http://localhost:8000/product/delete/' + this.state.id)
// 			.then((response) => {
// 				this.props.history.push('/product');
// 			})
// 			.catch((err) => {
// 				alert('Could Not Delete.');
// 			});
// 	};
// 	updateProduct = () => {
// 		axios
// 			.put('http://localhost:8000/product/update/' + this.state.id, this.state)
// 			.then((response) => {
// 				alert('Updated Successfully');
// 			})
// 			.catch((err) => {
// 				alert('could not update product detail');
// 				console.log(err);
// 			});
// 	};
// 	render() {
// 		return (
// 			<div className='productedit'>
// 				<h2 className='productedit__title'>Product Detail</h2>
// 				<div className='productedit__page'>
// 					<div className='productedit__form '>
// 						<div className='product__image'>
// 							{/* <img
// 								src={'http://localhost:8000/' + this.state.productimage}
// 								alt='product image'
// 							/> */}
// 						</div>
// 						<div className='productedit__info'>
// 							<div className='productedit__info__option'>
// 								<h2>Name</h2>
// 								<p>{this.state.name}</p>
// 							</div>
// 							<div className='productedit__info__option'>
// 								<h2>Price</h2>
// 								<p>Rs. {this.state.desc}</p>
// 							</div>
// 							<div className='productedit__info__option'>
// 								<h2>Quantity</h2>
// 								<p>{this.state.vendorName}</p>
// 							</div>
// 							<div className='productedit__info__option'>
// 								<h2>Type</h2>
// 								<p>{this.state.producttype}</p>
// 							</div>
// 							<div className='productedit__info__option'>
// 								<h2>Bidding-Time</h2>
// 								<p>{this.state.biddingtime}</p>
// 							</div>
// 							<div className='productedit__info__description'>
// 								<h2>Description</h2>
// 								<p>{this.state.productdescription}</p>
// 							</div>
// 							<Button onClick={this.deleteProduct}>Delete Product</Button>
// 						</div>
// 					</div>
// 					<div className='productedit__form'>
// 						<Form>
// 							<h2>Edit Product</h2>
// 							<FormGroup>
// 								<FormLabel className='productedit__label'>
// 									Product Name
// 								</FormLabel>
// 								<input
// 									className='form-control'
// 									type='text'
// 									placeholder='Product Name'
// 									name='productname'
// 									onChange={this.changeHandler}
// 									value={this.state.productname}
// 								/>
// 								<FormLabel className='productedit__label'>
// 									Product Price
// 								</FormLabel>
// 								<input
// 									className='form-control'
// 									type='Product Price'
// 									placeholder='Product Price'
// 									name='productprice'
// 									onChange={this.changeHandler}
// 									value={this.state.productprice}
// 								/>
// 								<div className='productedit__name'>
// 									<div className='productedit__option'>
// 										<FormLabel className='productedit__label'>
// 											Product Quantity
// 										</FormLabel>
// 										<input
// 											className='form-control'
// 											type='text'
// 											placeholder='Product Quantity'
// 											name='productquantity'
// 											onChange={this.changeHandler}
// 											value={this.state.productquantity}
// 										/>
// 									</div>
// 									<div className='productedit__option'>
// 										<FormLabel className='productedit__label'>
// 											Product Type
// 										</FormLabel>
// 										<select
// 											className='form-control'
// 											name='producttype'
// 											onChange={this.changeHandler}
// 											value={this.state.producttype}
// 										>
// 											{option.map((option) => (
// 												<option value={option.value}>{option.label}</option>
// 											))}
// 										</select>
// 									</div>
// 								</div>
// 								<FormLabel className='productedit__label'>
// 									Bidding Time
// 								</FormLabel>
// 								<input
// 									className='form-control'
// 									type='text'
// 									placeholder='Bidding Time'
// 									name='biddingtime'
// 									onChange={this.changeHandler}
// 									value={this.state.biddingtime}
// 								/>
// 								<FormLabel className='productedit__label'>
// 									Product Description
// 								</FormLabel>
// 								<input
// 									className='form-control'
// 									type='text'
// 									placeholder=' Product Description'
// 									name='productdescription'
// 									onChange={this.changeHandler}
// 									value={this.state.productdescription}
// 								/>
// 							</FormGroup>
// 							<Button
// 								className='productedit__button btn-lg btn-block'
// 								onClick={this.updateProduct}
// 							>
// 								Add Product
// 							</Button>
// 						</Form>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default withRouter(SingleProductPage);

import React, { Component } from 'react';
// import {
// 	ProductsContainer,
// 	ProductWrapper,
// 	ProductsHeading,
// 	ProductTitle,
// 	ProductCard,
// 	ProductImg,
// 	ProductInfo,
// 	ProductDesc,
// 	ProductPrice,
// 	ProductButton,
// 	FavouriteButton,
// } from './ProductsElements';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaPlusCircle } from 'react-icons/fa';
import { formatPrice } from '../../../../utils/helpers';

export default class Products extends Component {
	state = {
		products: [],
		vendorName: this.props.match.params.id,
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		},
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/product/getProducts/' + this.state.vendorName)
			.then((response) => {
				console.log(response);
				this.setState({
					products: response.data.data,
					vendorName: response.data.data[0].vendorId.vendorName,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	}
	addToCart = (id, event) => {
		console.log(id);
		event.preventDefault();
		axios
			.post('http://localhost:4000/cart/' + id, {}, this.state.config)
			.then((response) => {
				if (response.data.success) {
					toast.success(response.data.message, {
						autoClose: 1000,
					});
					// window.location.href = '/cartitem/showall' + id;
				} else {
					toast.error(response.data.message);
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};

	render() {
		return (
			<>
				<Wrapper className='page'>
					<div className='products-container'>
						<h4>{this.state.vendorName}</h4>
						<p>{this.state.products.length} products found</p>

						<hr />

						{this.state.products.length > 0 ? (
							this.state.products.map((productDisplay) => {
								return (
									<Wrapper>
										<div className='section-center products'>
											<article>
												<hr />
												{/* <img src={image} alt={name} /> */}
												<div>
													<h4>{productDisplay.name}</h4>
													<h5 className='price'>
														{formatPrice(productDisplay.price)}
													</h5>
													<p>{productDisplay.desc.substring(0, 150)}...</p>
													<div className='remov-btn'>
														<ProductButton
															className='btn'
															onClick={this.addToCart.bind(
																this,
																productDisplay._id
															)}
															// to={`/add/cart/${productDisplay._id}`}
															// className='link'
														>
															<FaPlusCircle />
														</ProductButton>
													</div>
													<hr />
												</div>
											</article>
										</div>
									</Wrapper>
								);
							})
						) : (
							<Wrapper>
								<div className='section-center'>
									<article className='service'>
										<h4>There is no data incoming.</h4>
									</article>
								</div>
							</Wrapper>
						)}
					</div>
				</Wrapper>
			</>
		);
	}
}

export const ProductButton = styled.button`
	font-size: 1rem;
	padding: 1rem 1rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2 ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

const Wrapper = styled.section`
	display: grid;
	row-gap: 3rem;

	img {
		width: 100%;
		display: block;
		width: 300px;
		height: 200px;
		object-fit: cover;
		border-radius: var(--radius);
		margin-bottom: 1rem;
	}
	h4 {
		margin-bottom: 0.5rem;
	}
	.price {
		color: var(--clr-primary-6);
		margin-bottom: 0.75rem;
	}
	p {
		max-width: 45em;
		margin-bottom: 1rem;
		text-transform: capitalize;
		margin-bottom: 0;
	}
	.btn {
		font-size: 0.5rem;
		padding: 0.25rem 0.5rem;
	}
	.remove-btn {
		color: var(--clr-white);
		background: transparent;
		border: transparent;
		letter-spacing: var(--spacing);
		background: var(--clr-red-dark);
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		right: 0;
		align-items: center;
		justify-content: right;
		border-radius: var(--radius);
		font-size: 0.75rem;
		cursor: pointer;
	}
	@media (min-width: 992px) {
		article {
			display: grid;

			grid-template-columns: auto 1fr;
			column-gap: 2rem;
			align-items: center;
		}
	}
`;
