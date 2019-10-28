import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const MyNavbar = () => {
    return (                  
        <Navbar bg="dark" variant="light" expand="lg" className="navbar-custom navbar">
            <Navbar.Brand className="navbar-brand"><NavLink to="/">Jia-Yung</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginLeft: 'auto'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="navbar-link" activeClassName="nav-item-active" activeStyle={{color: 'grey'}} to="/" exact>Home</NavLink>
                    <NavLink className="navbar-link" activeStyle={{ color: 'grey' }} to="/about">About Me</NavLink>
                    <NavLink className="navbar-link" activeStyle={{ color: 'grey' }} to="/resume">Resume</NavLink>
                    <NavLink className="navbar-link" activeStyle={{ color: 'grey' }} to="/projectspage">Projects</NavLink>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>                 
    )
}

export default MyNavbar;