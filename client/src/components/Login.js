import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

function Login({ setToken }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState('false')
    const [data, setData] = useState({})

    useEffect(() => {
        if(email !== '') {
            const url = '/auth/login'
            axios.post(url, data)
            .then(res => setToken(res.data[0]))
            .catch(err =>  console.error(err))
        }
    }, [data])
    
    const handleLoginSubmit = (e) => {
        setData({ email, password, rememberMe });
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

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check 
                    type="checkbox"
                    onChange={(e) => setRememberMe(e.target.checked)}
                    label="Remember Me" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr/>
            <p className="text-muted">
                New here, and willing to have an account? <Link to='/signup'>Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
