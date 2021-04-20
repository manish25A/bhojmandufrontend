import { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CartColumns from './CartColumns';
import PageHero from './PageHero';
import { formatPrice } from '../../../utils/helpers';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
export default class AdminProducts extends Component {
	state = {
		products: [],
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('resToken')}`,
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
			.get('http://localhost:4000/product/admin/getProducts', this.state.config)
			.then((res) => {
				console.log(res.data.data);
				this.setState({
					products: res.data.data,
				});
			})
			.catch((err) => {
				// console.log(err.response);
			});
	}

	render() {
		return (
			<main>
				<PageHero title='Your products' />

				<CartColumns />
				{this.state.products.map((item) => {
					return (
						<Wrapper>
							<div className='title'>
								{/* <img src={image} alt={name} /> */}
								<div>
									<Link to={`/admin/update/${item._id}`}>
										<h5 className='name'>{item.name}</h5>
									</Link>

			
									<h5 className='price-small'>{formatPrice(item.price)}</h5>
								</div>
							</div>
							<h5 className='price'>{formatPrice(item.price)}</h5>

							<h5 className='subtotal'>{(item.desc)}</h5>
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
		justify-items: center;
		gap: 1rem;
	}
	@media (max-width: 776px) {
		.title {
			margin-left: 10rem;
			align-items: center;
		}
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
			margin-bottom: 100px;
		}
	}
`;
