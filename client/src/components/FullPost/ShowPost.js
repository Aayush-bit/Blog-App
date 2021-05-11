import React, { useState } from 'react'
import { BookmarkCheckFill, BookmarkDash, HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';
import "./ShowPost.css"

const ShowPost = ({ fullPostData }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleBookmarkChange = () => {setIsBookmarked(!isBookmarked)}
    const handleLikedChange = () => {setIsLiked(!isLiked)}

    return (
        <div className="mb-4">
            <h1 className="display-4 text-capitalize">{fullPostData.postData.post.title}</h1>
            <div className="image mb-3">
                {/* todo - set post image */}
                {/* <p>image: {fullPostData.postData.post.image.img}</p>
                <p>placeholder: {fullPostData.postData.post.image.placeholder}</p> */}
            </div>

            <div className="text-muted author-date">
                <p className="text-capitalize">By- {fullPostData.author}</p>
                <p>
                    {
                        fullPostData.postData.editedOn ? 
                        fullPostData.postData.editedOn + " (edited)" :
                        fullPostData.postData.postedOn
                    }
                </p>
            </div>

            <p className="post-content">{fullPostData.postData.post.content}</p>

            <div className="like-bookmark">
                <div className="like mr-4">
                        <span 
                        className="like-icon mr-1" 
                        style={{"cursor": "pointer"}} 
                        onClick={handleLikedChange}>
                            {
                                isLiked ? 
                                <HandThumbsUpFill
                                size={25} /> :
                                <HandThumbsUp 
                                size={25} />
                            }
                        </span>
                        {fullPostData.postData.likes}
                    </div>

                <div className="bookmark" 
                style={{"cursor": "pointer"}} 
                onClick={handleBookmarkChange}>
                    <span className="bookmark-icon">
                        {
                            isBookmarked ? 
                            <BookmarkCheckFill
                            size={25} /> :
                            <BookmarkDash 
                            size={25} />
                        }
                    </span>
                </div>
            </div>

            {/* <p>id: {fullPostData.postData._id}</p> */}
        </div>
    )
}

export default ShowPost
