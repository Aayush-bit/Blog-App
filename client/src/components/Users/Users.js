import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import userImag from '../../public/potrait_man1.jpg'

function Users() {
    const url = '/api/users'
    const [users, setUsers] = useState([]) // for storing the users data
    useEffect(() => {
        axios.get(url)
        .then(res => setUsers(res.data))
        .catch(err => {
            console.error(err)
            if(err.response.status === 401) {
                // Redirect to Sign Up page
                console.log(`Redirect to Sign Up page`)
            }
        })
    }, [])
    return (
        <div className="container">
            <h1 className='display-4'>Users</h1>
            {
                users.map(user => (
                    <div key={user.id} className="users">
                        <UserCard key={user.id} profileImg={userImag} name={user.name} email={user.email} /> 
                    </div>
                ))
            }
        </div>
    )
}

export default Users
