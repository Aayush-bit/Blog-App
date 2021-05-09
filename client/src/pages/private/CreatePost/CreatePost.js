import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import PostForm from '../../../components/PostRoutes/PostForm'

const CreatePost = () => {
    const [postData, setPostData] = useState({});
    const [cookies] = useCookies(['userId'])
    const [submitStatus, setSubmitStatus] = useState(false);
    const id = cookies.userId;
    const url = `/api/posts/${id}`;
    
    useEffect(() => {
        if(submitStatus === true) {
            axios.post(url, postData)
            .then(res => {
                console.log(res.data);
            })
            .catch((resErr) => {
                console.log(resErr);
            })
        }
    }, [submitStatus]);
    
    return (
        <div className="container">
            <PostForm 
            setPostData={setPostData}
            setSubmitStatus={setSubmitStatus} />
        </div>
    )
}

export default CreatePost
