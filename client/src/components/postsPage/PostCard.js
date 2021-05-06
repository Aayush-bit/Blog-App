import React from 'react'
import "./PostCard.css"

const PostCard = ({ author, latestPost }) => {

    // shows breif of the entered data string
    const showBrief = (dataString, length) => {
        return (dataString.length >= length) ? 
        dataString.substring(0,length) + "..." : 
        dataString
    };

    return (
        latestPost ?
        <React.Fragment>
            <div className="post">
                <div className="box">
                    <div className="post-image">
                        <img src={latestPost.post.image.img} alt={latestPost.post.image.placeholder} className="image"/>
                    </div>
                    {/* <div className="post-image">{latestPost.post.image.img}</div> */}
                    <div className="post-content">
                        <div className="post-title">
                            {showBrief(latestPost.post.title, 50)}
                        </div>
                        <div className="post-author text-muted"><small>By- {author}</small></div>
                        <div className="post-brief-content">
                            {showBrief(latestPost.post.content, 70)}
                        </div>
                    </div>
                    <div className="post-info">
                        <div className="post-likes">{latestPost.likes} likes</div>
                        <div className="post-date-time text-muted">22:10, 1-1-21</div>
                    </div>
                </div>
            </div>
        </React.Fragment> : null
    )
}

export default PostCard
