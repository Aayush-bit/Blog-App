import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

function LoggedInNavbar({ setLoggedIn }) {
    const history = useHistory();
    const logoutHandler = () => {
        // send request to server to log the user out
        axios.get('/logout')
        .catch(err => console.error(err));

        setLoggedIn(false)
        // redirect to home page ( route: '/' )
        history.push('/')
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <div className="container">
                    <Navbar.Brand>
                        <Link to="/dashboard">
                            Blog
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="nav-link">
                                <Link to="/users">
                                    Users
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="/posts">
                                    Posts
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="/myprofile">
                                    Profile
                                </Link>
                            </div>
                            {/* use onclick handler */}
                            <div className="nav-link logout-option" onClick={logoutHandler} >
                                Logout
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </div>
    )
}

export default LoggedInNavbar
