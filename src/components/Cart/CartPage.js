import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { CartItem } from './CartItem';
import { PageHero } from './PageHero';
import CartColumns from './CartColumns';
import CartTotals from './CartTotals';
const CartPage = () => {
	var cart = 1;
	if (cart.length < 1) {
		return (
			<Wrapper className='page-100'>
				<div className='empty'>
					<h2>Your cart is empty</h2>
					<Link to='/products' className='btn'>
						fill it
					</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<main>
			<PageHero title='cart' />
			<Wrapper className='page'>
				<CartColumns></CartColumns>
				<CartItem></CartItem>
				<CartTotals></CartTotals>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.main`
	.empty {
		text-align: center;
		h2 {
			margin-bottom: 1rem;
			text-transform: none;
		}
	}
`;

export default CartPage;
