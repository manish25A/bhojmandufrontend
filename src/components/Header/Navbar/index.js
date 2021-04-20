import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
	FaAd,
	FaBars,
	FaDatabase,
	FaPalfed,
	FaPlus,
	FaProductHunt,
	FaSitemap,
	FaTimes,
} from 'react-icons/fa';
import Register from '../../Body/Register/index';
import logo from '../../../images/logo1.png';
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
	const customerToken = localStorage.getItem('customerToken');
	const resToken = localStorage.getItem('resToken');
	const logout = () => {
		localStorage.clear();
		window.location.href = '/';
	};
	return !customerToken && !resToken ? (
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

							<Link
								to='/get/product'
								className='cart-btn'
								onClick={handleClick}
							>
								Restaurants
								<span className='cart-container'>
									<FaShoppingCart />
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
						</ul>
					</div>
				</div>
			</NavContainer>
			<hr />
		</>
	) : resToken && customerToken=="undefined" ? (
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
							<Link
								to='/admin/insert/products'
								className='cart-btn'
								onClick={handleClick}
							>
								Insert Products
							</Link>
							<Link
								to='/admin/product'
								className='cart-btn'
								onClick={handleClick}
							>
								Your products
								<span className='cart-container'>
									<FaPalfed />
								</span>
							</Link>
							<Link
								to='/admin/dashboard'
								className='cart-btn'
								onClick={closeMobileMenu}
							>
								Dashboard
								<span className='cart-container'>
									<FaUserPlus />
								</span>
							</Link>
							<Link to='/user/logout' className='cart-btn' onClick={logout}>
								Logout
								<span className='cart-container'>
									<FaUserMinus />
								</span>
							</Link>
						</ul>
					</div>
				</div>
			</NavContainer>
			<hr />
		</>
	) : customerToken && resToken=="undefined" ? (
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
								</span>
							</Link>
							<Link
								to='/get/product'
								className='cart-btn'
								onClick={handleClick}
							>
								Restaurants
								<span className='cart-container'>
									<FaProductHunt />
								</span>
							</Link>
							<Link
								to='/user/dashboard'
								className='cart-btn'
								onClick={closeMobileMenu}
								cus
							>
								Dashboard
								<span className='cart-container'>
									<FaUserPlus />
								</span>
							</Link>
							<Link to='/user/logout' className='cart-btn' onClick={logout}>
								Logout
								<span className='cart-container'>
									<FaUserMinus />
								</span>
							</Link>
						</ul>
					</div>
				</div>
			</NavContainer>
			<hr />
		</>
	) : (
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

							<Link
								to='/get/product'
								className='cart-btn'
								onClick={handleClick}
							>
								Restaurants
								<span className='cart-container'>
									<FaShoppingCart />
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
						</ul>
					</div>
				</div>
			</NavContainer>
			<hr />
		</>
	);
}

const NavContainer = styled.nav`
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;

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
			height: auto;
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
