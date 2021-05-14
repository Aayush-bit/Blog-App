import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PageLoader from '../../components/PageLoader'
import ShowProfilePosts from '../../components/ShowProfile/ShowProfilePosts'
import ShowProfileUserDetails from '../../components/ShowProfile/ShowProfileUserDetails/ShowProfileUserDetails'

const User = () => {
    const { userId } = useParams();
    const url = `/api/users/profile/${userId}`;
    
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setUserData(res.data[0]);
            setPosts(res.data[0].postsData[0].posts);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr));
    }, []);
    
    return (
        isLoading ? 
        <PageLoader /> :
        <div className="container">
            <h1 className="display-4 text-capitalize">
                {userData.name}
            </h1>
            
            {/* user profile details */}
            <ShowProfileUserDetails 
            profileImg={userData.profileImg}
            following={userData.following}
            followers={userData.followers}
            bio={userData.bio} />
            
            <hr />

            {/* user's posts */}
            <ShowProfilePosts 
            author={userData.name} 
            authorId= {userData._id}
            posts={posts} />
        </div>
    )
}

export default User
