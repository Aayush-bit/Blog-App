import React from 'react'
import "./PostCard.css"

const PostCard = ({ author, postData }) => {

    // shows breif of the entered data string
    const showBrief = (dataString, length) => {
        return (dataString.length >= length) ? 
        dataString.substring(0,length) + "..." : 
        dataString
    };

    return (
        postData ?
        <React.Fragment>
            <div className="post">
                <div className="box">
                    <div className="post-image">
                        <img 
                        src={postData.post.image.img} 
                        alt={showBrief(postData.post.image.placeholder, 20)} 
                        className="image"/>
                    </div>
                    <div className="post-content">
                        <div className="post-title">
                            {showBrief(postData.post.title, 50)}
                        </div>
                        <div className="post-author text-muted">
                            <small>By- {author}</small>
                        </div>
                        <div className="post-brief-content">
                            {showBrief(postData.post.content, 70)}
                        </div>
                    </div>
                    <div className="post-info">
                        <div className="post-likes">{postData.likes} likes</div>
                        <div className="post-date-time text-muted">
                            {
                                postData.editedOn ? 
                                postData.editedOn + " (edited)": 
                                postData.postedOn
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> : null
    )
}

export default PostCard
