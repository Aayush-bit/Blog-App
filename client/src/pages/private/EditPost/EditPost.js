import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom'

import PostForm from '../../../components/PostRoutes/PostForm'
import PageLoader from '../../../components/PageLoader'

const EditPost = () => {
    const [cookies] = useCookies('userId');
    const [loading, setLoading] = useState(true);
    const [editPostData, setEditPostData] = useState({});
    const [newPostData, setNewPostData] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    
    const { postId } = useParams();
    
    const url = `/api/posts/${cookies.userId}/${postId}`;
    
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setEditPostData(res.data);
            setLoading(false)
        })
        .catch((resErr) => console.error(resErr));
    }, []);

    useEffect(() => {
        if(submitStatus === true) {
            console.log(newPostData);
            // * send PUT request
        }
    } , [submitStatus]);

    return (
        <div className="container">
            <h1 className="display-4">Edit Post</h1>
            {
                loading ? 
                <PageLoader/> : 
                <PostForm 
                editPostData= {editPostData} 
                setPostData={setNewPostData} 
                setSubmitStatus={setSubmitStatus} /> 
            }
        </div>
    )
}

export default EditPost
