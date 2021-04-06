import { Component } from 'react';

import axios from 'axios';
import { PageHero } from './PageHero';
import { FaUpload } from 'react-icons/fa';
import styled from 'styled-components';
class UpdateProducts extends Component {
	state = {
		name: '',
		desc: '',
		price: '',
		id: this.props.match.params.id,
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
			.put('http://localhost:4000/product/', data, this.state.config)
			.then((res) => {});
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/product/', this.state.id, this.state.config)
			.then((res) => {
				console.log(res.data.data);
				this.setState({
					mydata: res.data.data,
				});
			})
			.catch((err) => {
				// console.log(err.response);
			});
	}
	render() {
		return (
			<Wrapper>
				<div className='section-center'>
					<article className='header'>
						<h3>Update your products</h3>
					</article>
					<div className='services-center'>
						<article className='service'>
							<div className='content'>
								<form>
									<div className='form-control'>
										<label>Email:&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; </label>
										<input
											type='text'
											name='text'
											value={this.state.mydata.name}
											placeholder='email'
											className='search-input'
											onChange={(event) => {
												this.setState({ name: event.target.value });
											}}
										/>
									</div>{' '}
									<div className='form-control'>
										<label>Password</label>
										<input
											type='password'
											name='password'
											value={this.state.mydata.desc}
											placeholder='password'
											className='search-input'
											onChange={(event) => {
												this.setState({ desc: event.target.value });
											}}
										/>
									</div>
								</form>
							</div>

							<p>
								<button className='remove-btn' onClick={this.update}>
									<FaUpload />
								</button>
							</p>
							<p>Created at: &nbsp;{this.state.mydata.createdAt}</p>
						</article>
					</div>
				</div>
			</Wrapper>
		);
	}
}

const Wrapper = styled.article`
	.form-control {
		background: var(--clr-primary-7);
		border-color: var(--clr-primary-7);
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
		background: var(--clr-grey-10);
	}
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
	.remove-btn {
		color: var(--clr-white);
		background: transparent;
		border: transparent;
		letter-spacing: var(--spacing);
		background: var(--clr-primary-2);
		width: 4rem;
		height: 4rem;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius);
		font-size: 0.75rem;
		cursor: pointer;
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

export default UpdateProducts;
