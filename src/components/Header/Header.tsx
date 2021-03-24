// import { useState, useEffect } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Menu,
//     MenuItem,
//     IconButton,
//     Hidden,
//     Badge,
// } from '@material-ui/core';
// import { useStyles } from './style';
// import {
//     ExpandMoreOutlined,
//     HomeOutlined,
//     CategoryOutlined,
//     Storefront,
//     PermIdentityOutlined,
//     ExitToAppOutlined,
//     VpnKeyOutlined,
//     ShoppingCartOutlined,
//     LocalMallOutlined,
// } from '@material-ui/icons';
// // import { Sidebar } from './Header';
// import { MenuRounded } from '@material-ui/icons';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchCategories } from '../../redux/slices/category';
// import { NavLink } from 'react-router-dom';
// // import { Search } from './Header';
// // import { userLogout } from '../../redux/slices/user';
//
// export const Header = () => {
//     // const dispatch = useDispatch();
//     // const categories = useSelector((state) => state.categories.categories);
//     // const user = useSelector((state) => state.users.user);
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = useState(null);
//     // const [openSidebar, setOpenSidebar] = useState(false);
//     // const cartItems = user?.cart?.items?.reduce((total, value) => {
//     //     return value.quantity + total;
//     // }, 0);
//
//     // useEffect(() => {
//     //     dispatch(fetchCategories());
//     // }, [dispatch]);
//
//     const closeDropdownHandler = () => setAnchorEl(null);
//     const openDropdownHandler = (e) => setAnchorEl(e.currentTarget);
//
//     // const handleOpenSidebar = () => setOpenSidebar(true);
//     // const handleCloseSidebar = () => setOpenSidebar(false);
//
//     const dropdown = (
//         <Menu
//             anchorEl={anchorEl}
//             open={!!anchorEl}
//             keepMounted
//             onClose={closeDropdownHandler}
//         >
//             {/*{categories.map(({ _id, name }) => (*/}
//             {/*    <MenuItem*/}
//             {/*        component={NavLink}*/}
//             {/*        to={`/category/${_id}`}*/}
//             {/*        onClick={closeDropdownHandler}*/}
//             {/*        key={_id}*/}
//             {/*    >*/}
//             {/*        {name}*/}
//             {/*    </MenuItem>*/}
//             {/*))}*/}
//         </Menu>
//     );
//
//     return (
//         <AppBar
//             position="sticky"
//             className={classes.root}
//             style={{ backgroundColor: 'white' }}
//         >
//             <Toolbar>
//                 <Typography
//                     className={classes.heading}
//                     variant="h4"
//                     component={NavLink}
//                     to="/"
//                     exact
//                 >
//                    Bhojmandu
//                 </Typography>
//
//                 <Hidden smDown>
//                     {/*<Search className={classes.input} />*/}
//                 </Hidden>
//
//                 <Hidden mdDown>
//                     <Typography
//                         component={NavLink}
//                         activeClassName={classes.activeLink}
//                         exact
//                         to="/"
//                         className={classes.navItems}
//                     >
//                         <HomeOutlined /> Home
//                     </Typography>
//
//                     <Typography
//                         component={NavLink}
//                         activeClassName={classes.activeLink}
//                         exact
//                         to="/shop"
//                         className={classes.navItems}
//                     >
//                         <Storefront /> Shop
//                     </Typography>
//
//                     <Typography
//                         className={classes.navItems}
//                         onClick={openDropdownHandler}
//                     >
//                         <CategoryOutlined /> Category <ExpandMoreOutlined />
//                     </Typography>
//
//                     {/*{user ? (*/}
//                     {/*    <>*/}
//                     {/*        <Typography*/}
//                     {/*            component={NavLink}*/}
//                     {/*            activeClassName={classes.activeLink}*/}
//                     {/*            exact*/}
//                     {/*            to="/profile"*/}
//                     {/*            className={classes.navItems}*/}
//                     {/*        >*/}
//                     {/*            <PermIdentityOutlined /> Profile*/}
//                     {/*        </Typography>*/}
//                     {/*        <Typography*/}
//                     {/*            component={NavLink}*/}
//                     {/*            activeClassName={classes.activeLink}*/}
//                     {/*            exact*/}
//                     {/*            to="/cart"*/}
//                     {/*            className={classes.navItems}*/}
//                     {/*        >*/}
//                     {/*            <ShoppingCartOutlined />{' '}*/}
//                     {/*            <Badge badgeContent={cartItems} color="primary">*/}
//                     {/*                Cart*/}
//                     {/*            </Badge>*/}
//                     {/*        </Typography>*/}
//                     {/*        <Typography*/}
//                     {/*            component={NavLink}*/}
//                     {/*            activeClassName={classes.activeLink}*/}
//                     {/*            exact*/}
//                     {/*            to="/orders"*/}
//                     {/*            className={classes.navItems}*/}
//                     {/*        >*/}
//                     {/*            <LocalMallOutlined /> Orders*/}
//                     {/*        </Typography>*/}
//                     {/*        <Typography*/}
//                     {/*            className={classes.navItems}*/}
//                     {/*            // onClick={() => dispatch(userLogout())}*/}
//                     {/*        >*/}
//                     {/*            <ExitToAppOutlined /> Logout*/}
//                     {/*        </Typography>*/}
//                     {/*    </>*/}
//                     {/*) : (*/}
//                     {/*    <Typography*/}
//                     {/*        component={NavLink}*/}
//                     {/*        activeClassName={classes.activeLink}*/}
//                     {/*        exact*/}
//                     {/*        to="/login"*/}
//                     {/*        className={classes.navItems}*/}
//                     {/*    >*/}
//                     {/*        <VpnKeyOutlined /> Login*/}
//                     {/*    </Typography>*/}
//                     {/*)}*/}
//                 </Hidden>
//
//                 <Hidden lgUp>
//                     <IconButton
//                         // onClick={handleOpenSidebar}
//                         style={{ marginLeft: 'auto' }}
//                     >
//                         {/*<MenuRounded className={classes.menuIcon} />*/}
//                     </IconButton>
//                 </Hidden>
//
//                 {dropdown}
//
//                 {/*<Sidebar*/}
//                 {/*    cartItems={cartItems}*/}
//                 {/*    open={openSidebar}*/}
//                 {/*    onClose={handleCloseSidebar}*/}
//                 {/*/>*/}
//             </Toolbar>
//         </AppBar>
//     );
// };
// export default Header
//



import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Body from "../Body/Body";
import Login from "../Body/Login";
import Footer from "../Footer/footer"
import Register from "../Body/Register";
import ProductAdd from "../Body/ProductAdd";

class Header extends Component<any> {
    render() {
        return (

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/body/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/footer/home">
                                Footer
                            </Link>
                        </li> <li>
                            <Link to="/product/add">
                                Product Add
                            </Link>
                        </li>
                    </ul>

                    <hr/>

                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route path="/footer/home">
                            <Footer/>
                        </Route>
                        <Route path="/body/register">
                            <Register/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/product/add">
                            <ProductAdd/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header