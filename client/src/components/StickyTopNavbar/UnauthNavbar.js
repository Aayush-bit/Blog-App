import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UnauthNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <div className="container">
                    <Navbar.Brand>
                        <Link to="/">
                            Blog
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="nav-link">
                                <Link to="/posts">
                                    Posts
                                </Link>
                            </div>
                            
                            <div className="nav-link">
                                <Link to="/users">
                                    Users
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="/signup">
                                    Sign Up
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default UnauthNavbar
