import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const EditProfileForm = ({oldInfo, setNewInfo, submitStatus, setSubmitStatus}) => {
    const [newUserName, setNewUserName] = useState(oldInfo.name);
    const [newBio, setNewBio] = useState(oldInfo.bio);

    const handleFormSubmit = (e) => {
        setNewInfo({"name": newUserName, "bio": newBio});
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
                    placeholder="Enter New Username" 
                    required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    placeholder="Enter New Bio" />
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

export default EditProfileForm
