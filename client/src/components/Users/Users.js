import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import axios from 'axios'

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
            <h1>Users</h1>

            {/* send name and email to "UserCard" */}

            {
                users.map(user => (
                    <div className="users">
                        <UserCard key={user.id} name={user.name} email={user.email} /> 
                    </div>
                ))
            }
        </div>
    )
}

export default Users
