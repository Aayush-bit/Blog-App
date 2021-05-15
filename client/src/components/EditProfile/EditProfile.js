import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

import ProfileUpdated from './ProfileUpdated'
import PageLoader from '../PageLoader'
import EditProfileForm from "./EditProfileForm";

const EditProfile = () => {
    const [newInfo, setNewInfo] = useState({});
    const [oldInfo, setOldInfo] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [cookies] = useCookies('userId');

    const userId = cookies.userId;
    const url = `/api/users/${userId}`;

    useEffect(() => {
        // sends request to get user's old info
        axios.get(url)
        .then((res) => {
            setOldInfo(res.data);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr));
    }, [])
    
    useEffect(() => {
        if (submitStatus) {
            // sends put request to the server to update user info
            axios.put(url, newInfo)
            .then(() => setIsUpdated(true))
            .catch(resErr => console.error(resErr))
        }
    }, [submitStatus]);
    
    const showData = () => {
        if(isUpdated) {
            return(
                <>
                    <ProfileUpdated />
                </>
            );
        }

        if(isLoading) {
            return (
                <>
                    <PageLoader />
                </>
            );
        }

        if(!isLoading) {
            return (
                <>
                    <EditProfileForm 
                    oldInfo={oldInfo}
                    setNewInfo={setNewInfo} 
                    submitStatus={submitStatus}
                    setSubmitStatus={setSubmitStatus} />
                </> 
            );
        }
    }
    
    return (
        <div>
            <h1 className="display-4">Edit Profile</h1>
            {showData()}
        </div>
    )
}

export default EditProfile
