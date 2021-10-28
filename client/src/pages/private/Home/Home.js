import React, { useState, useEffect } from 'react'
import CreatePostIcon from '../../../components/CreatePostIcon/CreatePostIcon'
import PostCardEditDelete from '../../../components/PostCardEditDelete/PostCardEditDelete'
import { useCookies } from 'react-cookie'
import axios from 'axios';

import PageLoader from '../../../components/PageLoader'
import NoPostsPresent from '../MyPosts/NoPostsPresent';

function Home() {
    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies] = useCookies(['userId'])
    const myId = cookies.userId;
    const url = `/api/posts/${myId}`;
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setMyPosts(res.data);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr))
    }, [])
    
    return (
        <div className="container">
            <h1 className="display-4">Dashboard</h1>
            {
                isLoading ? 
                <PageLoader/> :
                (Object.entries(myPosts.posts).length === 0) ? 
                <NoPostsPresent /> : 
                myPosts.posts.map((post, index) => (
                    <PostCardEditDelete 
                    key={index} 
                    post={post}
                    author={myPosts.author}
                    authorId={myPosts._id} />
                ))
            } 
            
            <CreatePostIcon />
        </div>
    )
}

export default Home
