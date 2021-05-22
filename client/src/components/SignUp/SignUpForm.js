import React, { useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'

const SignUpForm = ({setData, submitStatus, setSubmitStatus}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setData({ name, email, password });
        setSubmitStatus(true);
    }

    return (
        <div>
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

                {
                    submitStatus ?
                    <Button variant="primary" type="submit" disabled>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true" /> Please Wait...
                    </Button> :
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                }

            </Form>
        </div>
    )
}

export default SignUpForm
