import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Register from '../../Body/Register';
import logo from '../../../images/logo1.png';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
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
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
