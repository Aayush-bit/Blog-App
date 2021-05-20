import React from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom"

import './ShowProfileUserDetails.css'

const ShowProfileUserDetails = ({ profileImg, following, followers, bio, isAuthor }) => {
    const history = useHistory();
    
    return (
        <>
            <div className="ShowProfileUserDetails">
                <div className="profile-image"></div>
                <div className="followers-following">
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
