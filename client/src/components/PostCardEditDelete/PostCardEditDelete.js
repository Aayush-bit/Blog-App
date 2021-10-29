import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Button} from "react-bootstrap"
import "./PostCardEditDelete.css"
import {Row, Col, Container} from "react-bootstrap";
import axios from 'axios';

const PostCardEditDelete = ({post, authorId, author}) => {
    const history = useHistory()

    const [isDeleted, setIsDeleted] = useState(false);

    // shows breif of the entered data string
    const showBrief = (dataString, length) => {
        return (dataString.length >= length) ? 
        dataString.substring(0,length) + "..." : 
        dataString
    };
    
    const showFullPost = () => {
        history.push(`/post/${authorId}/${post._id}`);
    }
    
    const deletePost = () => {
        // console.log("deleting...");

        const postId = post._id;
        
        axios.delete(`/api/posts/${authorId}/${postId}`)
        .then(() => setIsDeleted(true))
        .catch(resErr => console.error(resErr));
    }

    return (
        isDeleted ? <></> :
        <div className="container postCardEditDelete">
            <Container>
                <Row>
                    <Col sm={8} className="postCardEditDelete__title text-capitalize">
                        <h3>{showBrief(post.post.title, 40)}</h3>
                    </Col>

                    <Col sm={4} className="postCardEditDelete__actions">
                        <Button variant="light" size="sm" onClick={showFullPost}>
                            View
                        </Button>                        

                        <div 
                        className="postCardEditDelete__action postCardEditDelete__actions__edit"
                        onClick={() => history.push(`/post/edit/${post._id}`)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </div>
                        
                        <div 
                        onClick={deletePost} 
                        className="postCardEditDelete__action postCardEditDelete__actions__delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="postCardEditDelete__author text-muted text-capitalize">
                            <small>by- {author}</small>
                        </div>
                        {showBrief(post.post.content, 200)}
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4} className="text-right">
                        <div className="postCardEditDelete__date-time text-muted">
                            {
                                post.editedOn ? 
                                post.editedOn.split("T")[0] + " (edited)": 
                                post.postedOn.split("T")[0]
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostCardEditDelete
