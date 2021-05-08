// ! ERROR - some kind of "type error" while maping through the myPosts state

import React, {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const MyPosts = () => {
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
            <h1 className="display-4">MyPosts</h1>
            { 
                // typeof myPosts.posts
                // console.log(myPosts.posts)
                // (myPosts.posts !== null) ? 
                // Array(myPosts.posts)
                // .map((post) => {
                //     <>{post}</>
                // }) 
                // : 
                // <>You don't have any posts yet</>
            }
        </div>
    )
}

export default MyPosts
