import React, { Component } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const [amount, setAmount] = useState(1);
const increase = () => {
	setAmount((oldAmount) => {
		let tempAmount = oldAmount + 1;
		if (tempAmount > stock) {
			tempAmount = stock;
		}
		return tempAmount;
	});
};
const decrease = () => {
	setAmount((oldAmount) => {
		let tempAmount = oldAmount - 1;
		if (tempAmount < 1) {
			tempAmount = 1;
		}
		return tempAmount;
	});
};

export default class Products extends Component {
	state = {
		cart: [],
		config: {
			headers: {
				authorization: `Bearer ${localStorage.getItem('buyerToken')}`,
			},
		},
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/cart/', this.state.config)
			.then((response) => {
				console.log(response.data.message);
				this.setState({
					cartProduct: response.data.message,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	}
	render() {
		return (
			<Wrapper className='section section-center'>
				<CartColumns />
				{cart.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
				<hr />
				<div className='link-container'>
					<Link to='/products' className='link-btn'>
						continue shopping
					</Link>
					<button
						type='button'
						className='link-btn clear-btn'
						onClick={clearCart}
					>
						clear shopping cart
					</button>
				</div>
				<CartTotals />
			</Wrapper>
		);
	}
}
const Wrapper = styled.section`
	.link-container {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}
	.link-btn {
		background: transparent;
		border-color: transparent;
		text-transform: capitalize;
		padding: 0.25rem 0.5rem;
		background: var(--clr-primary-5);
		color: var(--clr-white);
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		font-weight: 400;
		cursor: pointer;
	}
	.clear-btn {
		background: var(--clr-black);
	}
`;
export default CartItems;
