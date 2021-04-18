// !! reconsider api values returned as response from server
import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import UserCard from '../../../components/usersPage/UserCard'
import axios from 'axios'
import { LoggedInContext } from '../../../App'

function Users() {
    const [users, setUsers] = useState([]) // for storing the users data
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext)
    const history = useHistory()

    const url = '/api/users'

    useEffect(() => {
        axios.get(url)
        .then(res => setUsers(res.data))
        .catch(err => {
            console.error(err)
            if(err.response.status === 401) {
                // set login status to false and redirect to login page
                setLoggedIn(false)
                history.push('/login')            
            }
        })
    }, [])

    return (
        <div className="container">
            <h1 className='display-4'>Users</h1>
            {
                users.map(user => (
                    <div key={user.id} className="users">
                        <UserCard key={user.id} name={user.name} email={user.email} /> 
                    </div>
                ))
            }
        </div>
    )
}

export default Users
