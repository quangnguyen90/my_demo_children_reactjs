import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import { Link, } from "react-router-dom";
import { CartContext } from '../ProductContext/Cart';
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">My Demo ReactJS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/product">Product</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <CartContext.Consumer>
                                    {({ cartItems }) => (
                                        <Link to="/product">Cart ({cartItems.length})</Link>
                                    )}
                                </CartContext.Consumer>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/topics">Topic</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/hoc">Hoc</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/normal">Not HOC</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/render-props">Render Props</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/context">Context</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/traffic-light">Traffic Light</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/func-set-state">Func setState</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/about">About</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Enjoy your react application</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
