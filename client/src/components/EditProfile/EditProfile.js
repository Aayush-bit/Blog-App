import React, { useEffect, useState } from 'react'
import EditProfileForm from "./EditProfileForm";

const EditProfile = () => {
    const [newInfo, setNewInfo] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);

    useEffect(() => {
        if (submitStatus) {
            console.log(newInfo);
            // post data here
        }
    }, [submitStatus]);
    
    return (
        <div>
            <h1 className="display-4">Edit Profile</h1>
            <EditProfileForm 
            setNewInfo={setNewInfo} 
            setSubmitStatus={setSubmitStatus} />
        </div>
    )
}

export default EditProfile
