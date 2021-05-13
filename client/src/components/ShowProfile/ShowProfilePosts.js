import React from 'react'
import PostCard from '../postsPage/PostCard'

const ShowProfilePosts = ({author, authorId, posts}) => {
    return (
        <div>
            {
                posts.map((post, index) => (
                    <PostCard 
                    author={author} 
                    postData={post} 
                    authorId={authorId} 
                    key={index} />
                ))
            }
        </div>
    )
}

export default ShowProfilePosts
