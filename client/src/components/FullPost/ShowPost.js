import React, { useState } from 'react'
import { 
    BookmarkCheckFill, 
    BookmarkDash, 
    HandThumbsUp, 
    HandThumbsUpFill,
    Chat
} from 'react-bootstrap-icons'
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import "./ShowPost.css"

const ShowPost = ({ isAuthor, fullPostData, userId }) => {
    // States
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const history = useHistory();

    const userProfileUrl = `/user/profile/${userId}`;

    // Functions
    const handleBookmarkChange = () => setIsBookmarked(!isBookmarked);
    const handleLikedChange = () => setIsLiked(!isLiked)
    const showToolTip = (icon, toolTip) => {
        return (
            <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip>{toolTip}</Tooltip>
            }>
                {icon}
            </OverlayTrigger>
        )
    }

    return (
        <div className="mb-4">
            <h1 className="display-4 text-capitalize">
                {fullPostData.postData.post.title}
            </h1>
            <div className="image mb-3">
                {/* todo - set post image */}
                {/* <p>image: {fullPostData.postData.post.image.img}</p>
                <p>placeholder: {fullPostData.postData.post.image.placeholder}</p> */}
            </div>

            <div className="text-muted author-date">
                <p className="text-capitalize">
                    by- <Link to={userProfileUrl} className="fullProfileLink text-muted text-underline">
                        {fullPostData.author}
                    </Link>
                </p>
                <p>
                    {
                        fullPostData.postData.editedOn ? 
                        fullPostData.postData.editedOn + " (edited)" :
                        fullPostData.postData.postedOn
                    }
                </p>
            </div>

            <p className="post-content">
                {fullPostData.postData.post.content}
            </p>
            
            {
                isAuthor ? 
                <div>
                    <Button 
                    onClick={() => history.push(`/post/edit/${fullPostData.postData._id}`)}
                    className="mr-3">
                        Edit
                    </Button>
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </div> :

                <div className="icons">
                    <div className="like mr-4">
                        <span 
                        className="like-icon mr-1" 
                        style={{"cursor": "pointer"}} 
                        onClick={handleLikedChange}>
                            {
                                isLiked ? 
                                showToolTip(<HandThumbsUpFill size={25} />, "liked") :
                                showToolTip(<HandThumbsUp size={25} />, "like")
                            }
                        </span>
                        {fullPostData.postData.likes}
                    </div>

                    <div className="bookmark" 
                    style={{"cursor": "pointer"}} 
                    className="mr-4"
                    onClick={handleBookmarkChange}>
                        <span className="bookmark-icon">
                            {
                                isBookmarked ? 
                                showToolTip(<BookmarkCheckFill size={25} />, "Bookmarked") :
                                showToolTip(<BookmarkDash size={25} />, "Bookmark")
                            }
                        </span>
                    </div>
                    
                    <div className="chat" 
                    style={{"cursor": "pointer"}} >
                        <span>{showToolTip(<Chat size={25} />, "Comment")}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ShowPost
