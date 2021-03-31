import React from 'react'
import { Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,NavItem,NavLinks,NavBtnLink } from './navbarElements';
    import {
      
        Switch,
        Route,
      
    } from "react-router-dom";
import  {FaBars} from 'react-icons/fa';



const Navbar = () => {
    return (
     <>
     <Nav> 
         <NavbarContainer> 
             <NavLogo to="/">Bhojmandu</NavLogo>
             <MobileIcon>
                 <FaBars/>
            </MobileIcon>
             <NavMenu>
                 <NavItem>
                     <NavLinks to="/about" >About</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="/products" >Products</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="/discover" >Discover</NavLinks>
                 </NavItem>
                
                     <NavBtnLink to="/register">Register</NavBtnLink>
                     
             </NavMenu>
             
             </NavbarContainer>
     </Nav>

{/* Switch code for navbar */}
     <Switch>
        <Route path="/about">

         </Route>
        <Route path="/body/register">
        </Route>
        <Route path="/login">
        </Route>
        </Switch>
     </>
    );
};

export default Navbar
