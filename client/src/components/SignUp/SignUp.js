import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

function SignUp(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState('false')
    const [data, setData] = useState({})
    
    useEffect(() => {        
        if(email !== '') {
            const url = 'http://localhost:5000/signup'
            axios.post(url, data)
            .then(res => props.setToken(res.data))
            .catch(err =>  console.error(err))
        }
    }, [data])

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setData({ name, email, password, rememberMe });
    }
    
    return (
        <div className="container">
            <h1 className="display-4 mb-3">Sign Up</h1>
            <Form method="POST" onSubmit={handleSignUpSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    )
}

export default SignUp
