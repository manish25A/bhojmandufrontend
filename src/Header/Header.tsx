import React, {Component, useEffect, useState} from "react";
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Login from "../Body/Login";
import Footer from "../Footer/footer"
import Register from "../Body/Register";
import {AppBar, Hidden, Toolbar, Typography,} from '@material-ui/core';
import {useStyles} from './style';
import {CategoryOutlined, ExpandMoreOutlined, HomeOutlined, Search, Storefront} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';

export const Header = () => {
    const dispatch = useDispatch();
    // const categories = useSelector((state) => state.categories.categories);
    const user = useSelector((state) => state.users.user);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openSidebar, setOpenSidebar] = useState(false);
    const cartItems = user?.cart?.items?.reduce((total, value) => {
        return value.quantity + total;
    }, 0);

    return (
                        <AppBar
                            position="sticky"
                            className={classes.root}
                            style={{backgroundColor: 'white'}}
                        >
                            <Toolbar>
                                <Typography
                                    className={classes.heading}
                                    variant="h4"
                                    component={NavLink}
                                    to="/"
                                    exact
                                >
                                    BhojMandu
                                </Typography>

                                <Hidden smDown>
                                    <Search className={classes.input}/>
                                </Hidden>

                                <Hidden mdDown>
                                    <Typography
                                        component={NavLink}
                                        activeClassName={classes.activeLink}
                                        exact
                                        to="/"
                                        className={classes.navItems}
                                    >
                                        <HomeOutlined/> Home
                                    </Typography>

                                    <Typography
                                        component={NavLink}
                                        activeClassName={classes.activeLink}
                                        exact
                                        to="/shop"
                                        className={classes.navItems}
                                    >
                                        <Storefront/> Shop
                                    </Typography>
                                </Hidden>
                            </Toolbar>
                        </AppBar>
    )
