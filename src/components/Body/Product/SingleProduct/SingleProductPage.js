import React, { Component } from 'react';

import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa';
import { formatPrice } from '../../../../utils/helpers';
import { PageHero } from '../../Admin/PageHero';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export default class Products extends Component {
	state = {
		activePage: 15,
		products: [],
		vendorName: this.props.match.params.id,
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('customerToken')}`,
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
					toast.success('Success', {
						autoClose: 2000,
					});
					// window.location.href = '/cartitem/showall' + id;
				} else {
					toast.error('Error adding to cart');
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};

	render() {
		const token = localStorage.getItem('customerToken');
		return (
			<>
				<Wrapper className='page'>
					<PageHero title='Products'></PageHero>

					<div className='section-center products'>
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
													<p className='remove-btn'>
														<ProductButton
															className='btn'
															onClick={this.addToCart.bind(
																this,
																productDisplay._id
															)}

														>
															<span>
																Add to cart
																<FaPlusCircle />
															</span>
														</ProductButton>
													</p>
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
		font-size: 1rem;
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
