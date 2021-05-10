import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import PostForm from '../../../components/PostRoutes/PostForm'
import PostCreated from './PostCreated';

const CreatePost = () => {
    const [postData, setPostData] = useState({});
    const [cookies] = useCookies(['userId'])
    const [submitStatus, setSubmitStatus] = useState(false);
    const [isPosted, setIsPosted] = useState(false);
    const [error, setError] = useState();
    const id = cookies.userId;
    const url = `/api/posts/${id}`;
    
    useEffect(() => {
        if(submitStatus === true) {
            axios.post(url, postData)
            .then(() => setIsPosted(true))
            .catch((resErr) => {
                setError(resErr);
            })
        }
    }, [submitStatus]);

    const showData = () => {
        if (isPosted === false) {
            return(
                <PostForm 
                setPostData={setPostData}
                setSubmitStatus={setSubmitStatus} />
            ) 
        }
        if(isPosted === true) {
            return <PostCreated />
        }
        if(error !== undefined) {
            return error;
        }
    }
    
    return (
        <div className="container">
            { showData() }
        </div>
    )
}

export default CreatePost
