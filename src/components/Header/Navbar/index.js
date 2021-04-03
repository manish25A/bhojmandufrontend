import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaPlus, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Register from '../../Body/Register';
import logo from '../../../images/logo1.png';
import CartButtons from './CartButtons';
import styled from 'styled-components';
import {
	FaBehance,
	FaCentos,
	FaShoppingCart,
	FaUserMinus,
	FaUserPlus,
} from 'react-icons/fa';
function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<NavContainer>
				<div className='nav-center'>
					<div className='nav-header' onClick={handleClick}>
						<Link to='/'>
							<img src={logo} alt='bhojmandu' />
						</Link>

						<div className='menu-icon' onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<Link to='/' className='cart-btn' onClick={closeMobileMenu}>
								Home
								<span className='cart-container'>
									<FaCentos />
								</span>
							</Link>
							<Link to='/cart' className='cart-btn' onClick={handleClick}>
								Cart
								<span className='cart-container'>
									<FaShoppingCart />
									<span className='cart-value'>{3}</span>
								</span>
							</Link>
							<Link
								to='/body/login'
								className='cart-btn'
								onClick={closeMobileMenu}
							>
								Login
								<span className='cart-container'>
									<FaUserPlus />
								</span>
							</Link>
							{/* <li className='nav-item'>
								<Link
									to='/products'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Products
								</Link>
							</li> */}
							{/* <CartButtons /> */}
							{/* <li className='nav-btn'>
								{button ? (
									<Link to='/body/login' className='btn-link'>
										<Button>Login</Button>
									</Link>
								) : (
									<Link to='/sign-up' className='btn-link'>
										<Button onClick={closeMobileMenu}>SIGN UP</Button>
									</Link>
								)}
							</li> */}
						</ul>
					</div>
				</div>
			</NavContainer>

			{/* <IconContext.Provider value={{ color: '#fff' }}>
				<nav className='navbar'>
					<div className='navbar-container container' onClick={handleClick}>
						<Link to='/'>
							<img src={logo} alt='bhojmandu' />
						</Link>
						<div className='menu-icon' onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to='/' className='nav-links' onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/body/register'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Register
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/products'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Products
								</Link>
							</li>
							<li className='nav-btn'>
								{button ? (
									<Link to='/body/login' className='btn-link'>
										<Button>Login</Button>
									</Link>
								) : (
									<Link to='/sign-up' className='btn-link'>
										<Button onClick={closeMobileMenu}>SIGN UP</Button>
									</Link>
								)}
							</li>
						</ul>
					</div>
				</nav>
			</IconContext.Provider> */}
		</>
	);
}

const NavContainer = styled.nav`
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	/* width: 225px; */

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			width: 175px;
			height: 150px;
			margin-left: -15px;
		}
	}
	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.5rem;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		display: flex;
		margin-right: 50px;
		align-items: center;
	}
	.nav-toggle {
		background: transparent;
		border: black;
		color: var(--clr-primary-5);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.5rem;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		display: flex;

		align-items: center;
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.6rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		background: var(--clr-primary-5);
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.75rem;
		color: var(--clr-white);
		padding: 12px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		svg {
			margin-left: 5px;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-grey-3);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-primary-7);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Navbar;
