import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const EditProfileForm = ({setNewInfo, setSubmitStatus}) => {
    const [newUserName, setNewUserName] = useState("")
    const [newBio, setNewBio] = useState("");

    const handleFormSubmit = (e) => {
        setNewInfo({"username": newUserName, "bio": newBio});
        setSubmitStatus(true);
        e.preventDefault();
    }
    
    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter New Username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    placeholder="Enter New Bio" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditProfileForm
