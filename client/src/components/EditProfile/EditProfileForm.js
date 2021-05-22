import React, { useState } from 'react'
import {Form, Button, Spinner} from 'react-bootstrap'

const EditProfileForm = ({oldInfo, setNewInfo, submitStatus, setSubmitStatus}) => {
    const [newUserName, setNewUserName] = useState(oldInfo.name);
    const [newBio, setNewBio] = useState(oldInfo.bio);
    const [newProfileImg, setNewProfileImg] = useState(oldInfo.profileImg);

    const handleFormSubmit = (e) => {
        // set new info to update the old one
        setNewInfo(
            {
                "profileImg": newProfileImg,
                "name": newUserName, 
                "bio": newBio
            }
        );

        setSubmitStatus(true);
        e.preventDefault();
    }
    
    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={newProfileImg}
                    onChange={(e) => setNewProfileImg(e.target.value)}
                    placeholder="Your Cool Profile Image" 
                    required />
                </Form.Group>
                
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

export default EditProfileForm
