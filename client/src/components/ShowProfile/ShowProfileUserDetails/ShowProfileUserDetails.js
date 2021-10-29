import React, { useState, useContext } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { LoggedInContext } from '../../../App'
import axios from "axios"

import './ShowProfileUserDetails.css'

const ShowProfileUserDetails = ({ username, email, numberOfPosts, profileImg, following, followers, bio, isAuthor }) => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [cookies, setCookie, deleteCookie] = useCookies(['userId'])
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteAccount = () => {
        axios.delete(`/api/users/${cookies.userId}`)
        .then(res => {
            // send request to server to log the user out
            axios.get('/logout')
            .catch(err => console.error(err));

            setLoggedIn(false);
            // redirect to home page ( route: '/' )
            history.push('/')
        })
    };

    const deleteAlert = () => {
        return (
            <Modal
            show={show}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered>
                <Modal.Header closeButton>
                <Modal.Title className="text-capitalize">
                    account deletion alert
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your account permanently?
                    By further confirming to proceed deletion process you will loose your account and account details permanently.
                    Please consider this before proceeding.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button onClick={deleteAccount} variant="danger">Yes, I know the consequences!</Button>
                </Modal.Footer>
          </Modal>  
        );
    }

    return (
        <>
            <div className="ShowProfileUserDetails">
                {deleteAlert()}
                <div className="profile-image"></div>
                {/* <div className="followers-following">
                    <div className="following text-center">
                        <div className="display-4">{following.length}</div>
                        <div 
                        className="following-text text-muted">
                            <small> following</small>
                        </div>
                    </div>
                    <div className="followers text-center">
                        <div className="display-4">{followers.length}</div>
                        <div 
                        className="followers-text text-muted">
                            <small> followers</small>
                        </div>
                    </div>
                </div>
                <div className="bio text-center">
                    {
                        bio ? 
                        <p>
                            <span className="text-muted">Bio:</span> {bio}
                        </p> : 
                        <p className="text-muted text-capitalize">
                            no bio
                        </p>
                    }
                </div> */}

                <div className="bio">
                    <h1 className="text-capitalize">{username}</h1>
                    <p>Bio: {bio}</p>
                    <p>{email}</p>
                    <p>{numberOfPosts} {" "}
                    {
                        (numberOfPosts === 1) ? <>post</> : <>posts</>
                    }
                    {" "} yet</p>
                </div>
                
                <div className="required-btns">
                    {
                        isAuthor ? 
                        <div className="edit-delete">
                            <Button variant="info" 
                            className="edit" 
                            size="lg" 
                            onClick={() => history.push(`/myprofile/edit`)}
                            block>
                                Edit
                            </Button>

                            <Button 
                            variant="outline-danger" 
                            className="delete" 
                            size="lg" 
                            onClick={handleShow}
                            block>
                                Delete
                            </Button>                        
                        </div> :
                        <div className="follow">
                            <Button variant="primary" size="lg" block>
                                Follow
                            </Button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ShowProfileUserDetails
