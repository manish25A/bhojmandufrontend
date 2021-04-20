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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Cart.css';
import CartColumns from './CartColumns';
import PageHero from './PageHero';
import { formatPrice } from '../../utils/helpers';
import { FaCartPlus, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default class CartPage extends Component {
	state = {
		cartProduct: [],

		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('customerToken')}`,
			},
		},
		fname: '',
		price: '',
		desc: '',
	};
	toadmin = (id, event) => {
		console.log(id);
		event.preventDefault();
		axios
			.post('http://localhost:4000/cart/' + id, {}, this.state.config)
			.then((response) => {
				if (response.data.success) {
					toast.success(response.data.message, {
						autoClose: 1000,
					});
				} else {
					toast.error(response.data.message);
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};
	removeProduct = (id) => {
		axios
			.delete('http://localhost:4000/cart/' + id, this.state.config)
			.then((response) => {
				console.log(response);
				window.location.href = '/cart';
				if (response.data.success) {
					toast.success(response.success, {
						autoClose: 1000,
					});
				} else {
					toast.error(response.data.message);
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message);
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
					return (
						<Wrapper>
							<div className='title'>
								{/* <img src={image} alt={name} /> */}
								<div>
									<h5 className='name'>{item.itemId[0].name}</h5>
									
									<h5 className='price-small'>{item.itemId[0].desc}</h5>
								</div>
							</div>
							<h5 className='price'>{item.itemId[0].desc}</h5>
							<h5 className='subtotal'>{formatPrice(item.itemId[0].price)}</h5>
							<button
								className='checkout-btn'
								onClick={this.removeProduct.bind(this, item._id)}
							>
								<FaCartPlus />
							</button>
						</Wrapper>
					);
				})}
				<hr />

				<CartTotals />
			</main>
		);
	}
}

const CartTotals = () => {
	var shipping_fee = 100;
	return (
		<main>

		
		<Checkout>
			<div>
				<article>
					<hr />
					<h4>
						Shipping fee :<span>{formatPrice(shipping_fee)}</span>
					</h4>
				</article>
			</div>
		</Checkout>
		</main>
	);
};

export const Wrapper = styled.main`

	.subtotal {
		display: none;
	}

	display: grid;
	grid-template-columns: 200px auto auto;
	grid-template-rows: 75px;
	gap:  1rem;
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
	.checkout-btn {
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

const Checkout = styled.section`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	article {
		border: 1px solid var(--clr-grey-8);
		border-radius: var(--radius);
	}
	h4,
	h5,
	p {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
	p {
		text-transform: capitalize;
	}
	h4 {
		margin-top: 2rem;
	}
	@media (min-width: 776px) {
		justify-content: flex-end;
	}
	
`;
