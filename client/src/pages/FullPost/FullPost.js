import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import PageLoader from '../../components/PageLoader'

const FullPost = () => {
    const { userId, postId } = useParams()
    const url = `/api/posts/${userId}/${postId}`;
    const [fullPostData, setFullPostData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState();

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setFullPostData(res.data)
            setIsLoading(false);
        })
        .catch(resErr => {
            console.error(resErr)
            setIsLoading(false);
        });
    }, []);

    const showData = () => {
        if(isLoading) {
            return <PageLoader />
        }
        if(!isLoading) {
            // if(error !== undefined) {
            //     return <>Error</>
            // }
            return JSON.stringify(fullPostData);
        }
    }
    
    return (
        <div className="container">
            <h1 className="display-4">FullPost</h1>
            {
                showData()
            }
        </div>
    )
}

export default FullPost
