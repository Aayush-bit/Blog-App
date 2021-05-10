import React, {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import PageLoader from '../../components/PageLoader'


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
                isLoading ? 
                <PageLoader/> :
                (Object.entries(myPosts.posts).length === 0) ? <>no post present</> : <>data loaded</> 
            }
        </div>
    )
}

export default MyPosts
