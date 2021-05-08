import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import PostForm from './PostForm'

const CreatePost = () => {
    const [postData, setPostData] = useState({});
    const [cookies] = useCookies(['userId'])
    const id = cookies.userId;
    const url = `/api/posts/${id}`;
    
    useEffect(() => {
        // when there is post data
        if(Object.keys(postData).length !== 0) {
            axios.post(url, postData)
            .then(res => {
                console.log(res.data);
            })
            .catch((resErr) => {
                console.log(resErr);
            })
        }
    }, [postData]);
    
    return (
        <div className="container">
            <PostForm setPostData={setPostData} />
        </div>
    )
}

export default CreatePost
