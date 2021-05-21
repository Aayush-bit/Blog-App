import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

import CreatePostIcon from '../../../components/CreatePostIcon/CreatePostIcon'
import PageLoader from "../../../components/PageLoader"
import ShowProfilePosts from '../../../components/ShowProfile/ShowProfilePosts'
import ShowProfileUserDetails from '../../../components/ShowProfile/ShowProfileUserDetails/ShowProfileUserDetails'

const Profile = () => {
    const [userData, setUserData] = useState({});
    // ? const [err, setErr] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [cookies] = useCookies(['userId']);
    
    const url = `/api/users/myprofile/${cookies.userId}`;

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setUserData(res.data[0]);
            setPosts(res.data[0].postsData[0].posts);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr))
    }, []);

    return (
        <>
            {
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
                    bio={userData.bio} 
                    isAuthor={true} />
                    
                    <hr />

                    {/* user's posts */}
                    <ShowProfilePosts 
                    author={userData.name} 
                    authorId= {userData._id}
                    posts={posts} />

                    <Link 
                    to="/myposts" 
                    className="text-capitalize">
                        see all posts...
                    </Link>
                </div>
            }
            <CreatePostIcon />
        </>
    )
}

export default Profile
