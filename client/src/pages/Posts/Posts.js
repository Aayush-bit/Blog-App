import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PageLoader from "../../components/PageLoader"

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
            <h1 className="display-4">Posts</h1>
            {
                isLoading ? 
                <PageLoader /> :
                // posts.map((postData, index) => (
                //     (postData.posts !== []) ?
                //     <React.Fragment key={index}>
                //         <hr/>
                //         {JSON.stringify(postData.posts)}
                //         <br/>
                //     </React.Fragment> : null
                // ))
                <>
                    <p>data loaded</p>
                    {console.log(posts)}
                </>
            }
        </div>
    )
}

export default Posts
