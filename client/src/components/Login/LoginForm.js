import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = ({ email, setEmail, password, setPassword, submitStatus, setSubmitStatus, setData }) => {
    const handleLoginSubmit = (e) => {
        setData({ email, password });
        setSubmitStatus(true);
        e.preventDefault();
    }

    return (
        <div className="login-form">
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
                {
                    submitStatus ?
                    <Button variant="primary" type="submit" disabled>
                        Please Wait...
                    </Button> :
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                }
            </Form>
        </div>
    )
}

export default Login
