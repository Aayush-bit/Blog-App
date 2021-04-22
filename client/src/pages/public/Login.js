import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Form, Button, Alert } from 'react-bootstrap'
import { LoggedInContext } from '../../App'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState({})
    const [err, setErr] = useState()
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext)
    const history = useHistory();
    // ! const [submitBtn, setSubmitBtn] = useState('enabled')

    useEffect(() => {
        if(email !== '' && password !== '') {
            const url = '/auth/login';
            axios.post(url, data)
            .then(res => {
                setLoggedIn(res.data.loggedIn)
                
                // redirect to dashboard page 
                history.push('/dashboard');
            })
            .catch((resErr) => {
                setErr(resErr.response.status);

                setPassword('');

                // if the account with entered email address doesn't exist in the database
                if(resErr.response.status === 404) {
                    setEmail('');
                }
            })
        }
    }, [data])
    
    const handleLoginSubmit = (e) => {
        setData({ email, password });
        e.preventDefault();
    }
    
    return (
        <div className="container">
            <h1 className="display-4 mb-3">Login</h1>
            <Form method="POST" onSubmit={handleLoginSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr/>
            <p className="text-muted">
                Create a new account! <Link to='/signup'>Sign Up</Link>
            </p>

            {/* Alerting the user about the error (if exists) */}
            {
                (err === 404) ? 
                <>
                    <Alert variant="danger">
                        Account with the entered email address doesn't exist!
                    </Alert>
                </> : null
            }
            {
                (err === 401) ? 
                <>
                    <Alert variant="danger">
                        Incorrect password entered! Please try again...
                    </Alert>
                </> : null
            }
        </div>
    )
}

export default Login
