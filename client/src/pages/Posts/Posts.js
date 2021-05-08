import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PageLoader from "../../components/PageLoader"
import PostCard from "../../components/postsPage/PostCard"

function Posts() {
    const [posts, setPosts] = useState([]) // for storing posts data
    // ? const [err, setErr] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const url = '/api/posts';

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPosts(res.data);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr))
    }, [])

    return (
        <div className="container">
            {
                isLoading ? 
                <PageLoader /> :
                posts.map((postData, index) => (
                    <React.Fragment key={index}>
                        <PostCard author={postData.author} postData={postData.posts[0]} />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Posts
