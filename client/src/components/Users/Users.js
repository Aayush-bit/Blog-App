import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Users({token}) {
    const url = '/api/users'
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(res => console.log(res.data))
        // .then(res => setUsers(res.data))
        .catch(err => {
            console.error(err)
            if(err.response.status === 401) {
                console.log(`Redirect to Sign Up page`)
            }
        })
    }, [])
    return (
        <div className="container">
            <h1>Users</h1>
            {/* {users.map(user => (
                <p key={user.id}>{user.name} {user.email} {user.followers.length} </p>
            ))} */}
        </div>
    )
}

export default Users
