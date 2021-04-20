import React, { Component } from 'react';

import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import PageHero from '../../Cart/PageHero';
const token = localStorage.getItem('customerToken');

export default class Products extends Component {
	state = {
		products: [],
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('customerToken')}`,
			},
		},
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/vendor/auth/')
			.then((response) => {
				console.log(response);
				this.setState({
					products: response.data.data,
					count: response.count,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	}
	render() {
		return (

			<Wrapper className="page">
				<PageHero title='Products'/>

				<div className='products-container'>
					{this.state.products.length > 0 ? (
						this.state.products.map((productDisplay) => {
							return (
								<Wrapper>
									<div className='container'>
										<img src={"http://localhost:4000/uploads/" + productDisplay.photo} alt='logo' />
										<Link
											to={`/single/product/${productDisplay.vendorName}`}
											className='link'
										>
											<FaSearch />
										</Link>
									</div>
									<footer>
										<h5>{productDisplay.vendorName}</h5>
										<p>{productDisplay.price}</p>
									</footer>
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
		);
	}
}

const Wrapper = styled.article`
	.container {
		position: relative;
		background: var(--clr-black);
		border-radius: var(--radius);
	}
	.service {
		background: var(--clr-primary-7);
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
		position: relative;
		p {
			color: var(--clr-primary-2);
		}
	}
	@media (min-width: 576px) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
	@media (min-width: 1280px) {
		padding: 0;
		.section-center {
			transform: translateY(5rem);
		}
	}
	h3,
	h4 {
		color: var(--clr-primary-1);
	}
	padding: 5rem 0;

	background: var(--clr-primary-10);
	.header h3 {
		margin-bottom: 2rem;
	}
	.services-center {
		margin-top: 4rem;
		display: grid;
		gap: 2.5rem;
		margin-bottom: 20px;
	}
	span {
		width: 4rem;
		height: 4rem;
		display: grid;
		margin: 0 auto;
		place-items: center;
		margin-bottom: 1rem;
		border-radius: 50%;
		background: var(--clr-primary-10);
		color: var(--clr-primary-1);
		svg {
			font-size: 2rem;
		}
	}
	img {
		width: 100%;

		display: block;
		object-fit: cover;
		border-radius: var(--radius);
		transition: var(--transition);
	}
	.link {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--clr-primary-5);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		transition: var(--transition);
		opacity: 0;
		cursor: pointer;
		svg {
			font-size: 1.25rem;
			color: var(--clr-white);
		}
	}
	.container:hover img {
		opacity: 0.5;
	}
	.container:hover .link {
		opacity: 1;
	}
	footer {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	footer h5,
	footer p {
		margin-bottom: 0;
		font-weight: 400;
	}

	footer p {
		color: var(--clr-primary-5);
		letter-spacing: var(--spacing);
	}
	img {
		height: 200px;
	}

	.products-container {
		margin-top:5rem;
		display: grid;
		gap: 2rem 1.5rem;
	}

	@media (min-width: 992px) {
		.products-container {
			grid-template-columns: repeat(2, 1fr);
		}
		.img {
		}
	}
	@media (min-width: 1170px) {
		.products-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
