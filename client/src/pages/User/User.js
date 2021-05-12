import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userId } = useParams();
    const url = `/api/users/profile/${userId}`;
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setUserData(res.data[0]);
            console.log(res.data[0]);
        })
        .catch(resErr => console.error(resErr));
    }, []);
    
    return (
        <div className="container">
            <h1 className="display-4">User</h1>
            {/* <p>{userId}</p> */}
            {/* <p>{JSON.stringify(userData._id)}</p> */}
            <p>{JSON.stringify(userData.name)}</p>
            <p>following: {JSON.stringify(userData.following)}</p>
            <p>followers: {JSON.stringify(userData.followers)}</p>
            <p>{JSON.stringify(userData.profileImg)}</p>
            <p>bio: {JSON.stringify(userData.bio)}</p>
            <p>{JSON.stringify(userData.email)}</p>

            {/* todo - set page loader */}
            <p>{JSON.stringify(userData.postsData[0].posts)}</p>
            {/* {
                userData.postsData[0].posts.map(post => (<p>{post}</p>))
            } */}
            
        </div>
    )
}

export default User

// db.users.aggregate([
//     {
//         $lookup: {
//             from: "posts",
//             localField: "_id",
//             foreignField: "_id",
//             as: "userDetail"
//         }
//     }, 
//     {
//         $project: {password: 0}
//     }
// ]);