import React, { useState, useEffect }  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Body from "../Body/Body";
// import Login from "../Body/Login";
// import Footer from "../Footer/footer"
// import Register from "../Body/Register";
// import ProductAdd from "../Body/ProductAdd";
import { Button } from "react-bootstrap";
import './Header.css';
import logo from "./static/logo1.png";

function Header (){
 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (

        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img alt="logo" src={logo} style={{width:100}}/>
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/body/Register' className='nav-links' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/auth/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/auth/register'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 Register
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button className='btn-primary'>SIGN UP</Button>}
          </div>
        </nav>
   
    );
  }

    //         <Router>
    //             <div>
    //                 <ul>
    //                     <li>
    //                         <Link to="/">Home</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/body/register">Register</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/login">Login</Link>
    //                     </li> 
    //                     <li>
    //                         <Link to="/product/add">Product Add</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/footer/home">
    //                            Footer
    //                         </Link>
    //                     </li>
    //                 </ul>

    //                 <hr/>

    //                 {/*
    //       A <Switch> looks through all its children <Route>
    //       elements and renders the first one whose path
    //       matches the current URL. Use a <Switch> any time
    //       you have multiple routes, but you want only one
    //       of them to render at a time
    //     */}
    //                 <Switch>
    //                     <Route path="/footer/home">
    //                         <Footer/>
    //                     </Route>
    //                     <Route path="/body/register">
    //                         <Register/>
    //                     </Route>
    //                     <Route path="/login">
    //                         <Login/>
    //                     </Route> 
    //                      <Route path="/product/add">
    //                         <ProductAdd/>
    //                     </Route>
    //                 </Switch>
    //             </div>
    //         </Router>
    //     )
    // }
// }

export default Header