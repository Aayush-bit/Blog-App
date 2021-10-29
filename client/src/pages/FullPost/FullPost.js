import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import PageLoader from '../../components/PageLoader'
import ShowPost from '../../components/FullPost/ShowPost'

const FullPost = () => {
    const { userId, postId } = useParams()
    const url = `/api/posts/${userId}/${postId}`;
    const [fullPostData, setFullPostData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(url)
        .then(res => setFullPostData(res.data))
        .catch(resErr => setError(resErr))
        .finally(() => setIsLoading(false));
    }, []);

    const showData = () => {
        if(isLoading) {
            return <PageLoader />
        }
        if(!isLoading) {
            if(error !== undefined) {
                return <h1 className="text-center text-danger display-4">Error occured</h1>
            }
            return (
                <ShowPost 
                isAuthor={fullPostData.isAuthor}
                fullPostData={fullPostData.requiredPost} 
                userId={userId} />
            )
        }
    }
    
    return (
        <div className="container">
            { showData() }
        </div>
    )
}

export default FullPost
