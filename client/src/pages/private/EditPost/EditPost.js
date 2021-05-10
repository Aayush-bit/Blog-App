import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom'

import PostForm from '../../../components/PostRoutes/PostForm'
import PageLoader from '../../../components/PageLoader'
import PostEdited from './PostEdited'
import PostNotFound from './PostNotFound'

const EditPost = () => {
    const [cookies] = useCookies('userId');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [editPostData, setEditPostData] = useState({});
    const [newPostData, setNewPostData] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const [dataEdited, setDataEdited] = useState(false);
    
    const { postId } = useParams();
    
    const url = `/api/posts/${cookies.userId}/${postId}`;
    
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setEditPostData(res.data);
            setIsLoading(false)
        })
        .catch((resErr) => {
            setError(resErr.response.status);
            setIsLoading(false)
        });
    }, []);

    useEffect(() => {
        if(submitStatus === true) {
            const editDataUrl = `/api/posts/edit/${cookies.userId}/${postId}`;

            axios.put(editDataUrl, newPostData)
            .then(res => {
                if(res.data.dataEdited===true){
                    setDataEdited(true);
                }
            })
            .catch(resErr => console.log(resErr));
        }
    } , [submitStatus]);

    const showData = () => {
        if(isLoading) {
            return <PageLoader/>
        }

        if(error === 404) {
            return <PostNotFound />
        }

        if(dataEdited) {
            return <PostEdited />
        }

        if(!dataEdited) {
            return (
                <PostForm 
                editPostData= {editPostData} 
                setPostData={setNewPostData} 
                setSubmitStatus={setSubmitStatus} />
            )
        }

    }
    
    return (
        <div className="container">
            <h1 className="display-4">Edit Post</h1>
            { showData() }
        </div>
    )
}

export default EditPost
