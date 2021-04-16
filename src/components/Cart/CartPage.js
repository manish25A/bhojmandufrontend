import { Component } from 'react';
import {
	Row,
	Col,
	FormGroup,
	Button,
	input,
	Container,
	Form,
} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Cart.css';
import CartColumns from './CartColumns';
import PageHero from './PageHero';
import { formatPrice } from '../../utils/helpers';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
export default class CartItem extends Component {
	state = {
		cartProduct: [],

		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('customerToken')}`,
			},
		},
	};

	removeProduct = (id) => {
		axios
			.delete('http://localhost:4000/cart/' + id, this.state.config)
			.then((response) => {
				console.log(response);
				window.location.href = '/cart';
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
	componentDidMount() {
		axios
			.get('http://localhost:4000/cart/all', this.state.config)
			.then((response) => {
				this.setState({
					cartProduct: response.data.data,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	}

	render() {
		return (
			<main>
				<PageHero title='cart' />

				<CartColumns />
				{this.state.cartProduct.map((item) => {
					var id = item._id;
					return (
						<Wrapper>
							<div className='title'>
								{/* <img src={image} alt={name} /> */}
								<div>
									<h5 className='name'>{item.customerId.fname}</h5>
									{/* <p className='color'>
										color :
										<span style={{ background: color }} />
									</p> */}
									<h5 className='price-small'>
										{formatPrice(item.itemId.price)}
									</h5>
								</div>
							</div>
							<h5 className='price'>{formatPrice(item.itemId.price)}</h5>
							{/* <AmountButtons
								amount={amount}
								increase={increase}
								decrease={decrease}
							/> */}
							<h5 className='subtotal'>{formatPrice(item.itemId.price * 1)}</h5>
							<button
								className='remove-btn'
								onClick={this.removeProduct.bind(this, item._id)}
							>
								<FaTrash />
							</button>
						</Wrapper>
					);
				})}
				<hr />

				{/* <CartTotals /> */}
				{/* <div class='cartItem'>
					<div class='cart_section'>
						<div class='container-fluid'>
							<div class='row'>
								<div class='col-lg-10 offset-lg-1'>
									<div class='cart_title'>Shopping Cart</div>

									{this.state.cartProduct.map((productdata) => {
										return (
											<div class='cart_container'>
												<div class='cart_items'>
													<ul class='cart_list'>
														<li class='cart_item clearfix'>
															<div class='cart_item_image'>
																{/* <img
																src={
																	'http://localhost:90/' +
																	productdata.CartItemid.ProductImage
																}
																alt={productdata.CartItemid.ProductImage}
																class='rounded'
																width='200'
																height='120'
															/> */}
				{/* </div>

															<div class='cart_item_info d-flex flex-md-row flex-column justify-content-between'>
																<div class='cart_item_name cart_info_col'>
																	<div class='cart_item_title'>Name</div>
																	<div class='cart_item_text'>
																		{productdata.itemId.desc}
																	</div>
																</div>
																<div class='cart_item_color cart_info_col'>
																	<div class='cart_item_title'>Color</div>
																	<div class='cart_item_text'>
																		<span style={{ mystyle }}></span>
																		{productdata.itemId.name}
																	</div>
																</div>
															</div>
														</li>
													</ul>
												</div>
												<div class='cart_buttons'>
													{' '}
													<button
														type='button'
														class='button cart_button_clear'
														onClick={this.deleteProduct.bind(
															this,
															productdata._id
														)}
													>
														{' '}
														Delete Item
													</button>{' '}
													<button
														type='button'
														class='button cart_button_checkout'
													>
														Proceed To Checkout
													</button>{' '}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</main>
		);
	}
}
export const Wrapper = styled.main`
	.empty {
		text-align: center;
		h2 {
			margin-bottom: 1rem;
			text-transform: none;
		}
	}
	.subtotal {
		display: none;
	}
	.price {
		display: none;
	}
	display: grid;
	grid-template-columns: 200px auto auto;
	grid-template-rows: 75px;
	gap: 3rem 1rem;
	justify-items: center;
	margin-bottom: 3rem;
	align-items: center;
	.title {
		grid-template-rows: 75px;
		display: grid;
		grid-template-columns: 75px 125px;
		align-items: center;
		text-align: left;
		gap: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: var(--radius);
		object-fit: cover;
	}
	h5 {
		font-size: 0.75rem;
		margin-bottom: 0;
	}

	.color {
		color: var(--clr-grey-5);
		font-size: 0.75rem;
		letter-spacing: var(--spacing);
		text-transform: capitalize;
		margin-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		span {
			display: inline-block;
			width: 0.5rem;
			height: 0.5rem;
			background: red;
			margin-left: 0.5rem;
			border-radius: var(--radius);
		}
	}
	.price-small {
		color: var(--clr-primary-5);
	}
	.amount-btns {
		width: 75px;
		button {
			width: 1rem;
			height: 0.5rem;
			font-size: 0.75rem;
		}
		h2 {
			font-size: 1rem;
		}
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
		align-items: center;
		justify-content: center;
		border-radius: var(--radius);
		font-size: 0.75rem;
		cursor: pointer;
	}
	@media (min-width: 776px) {
		.subtotal {
			display: block;
			margin-bottom: 0;
			color: var(--clr-grey-5);
			font-weight: 400;
			font-size: 1rem;
		}
		.price-small {
			display: none;
		}
		.price {
			display: block;
			font-size: 1rem;
			color: var(--clr-primary-5);
			font-weight: 400;
		}
		.name {
			font-size: 0.85rem;
		}
		.color {
			font-size: 0.85rem;
			span {
				width: 0.75rem;
				height: 0.75rem;
			}
		}
		grid-template-columns: 1fr 1fr 1fr 1fr auto;
		align-items: center;
		grid-template-rows: 75px;
		img {
			height: 100%;
		}
		.title {
			height: 100%;
			display: grid;
			grid-template-columns: 100px 200px;
			align-items: center;
			gap: 1rem;
			text-align: left;
		}
		.amount-btns {
			width: 100px;
			button {
				width: 1.5rem;
				height: 1rem;
				font-size: 1rem;
			}
			h2 {
				font-size: 1.5rem;
			}
		}
	}
`;
