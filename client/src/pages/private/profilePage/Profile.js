import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PageLoader from "../../../components/PageLoader";
import { useCookies } from 'react-cookie';

const Profile = () => {
    const [profileData, setProfileData] = useState([]);     // for storing profileUserData data
    // ? const [err, setErr] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie, deleteCookie] = useCookies(['userId']);
    const url = `/api/users/${cookies.userId}`;

    // todo make request to get the posts posted by the user
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setProfileData(res.data);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr))
    }, [])

    return (
        <div className="container">
            <h1 className="display-4">Profile</h1>
            {
                isLoading ? 
                <PageLoader /> :
                <>
                    {console.log(profileData)}
                    <p>username: {profileData.name}</p>
                    <p>email: {profileData.email}</p>
                    <p>followers: {profileData.followers.length}</p>
                    <p>following: {profileData.following.length}</p>
                    <p>bookmarks: {profileData.bookmarks.length}</p>
                </>
            }
        </div>
    )
}

export default Profile
