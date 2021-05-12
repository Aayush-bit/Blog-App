import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PageLoader from "../../components/PageLoader"
import UserCard from "../../components/usersPage/UserCard"

// import UserCard from '../../components/usersPage/UserCard'

function Users() {
    const [users, setUsers] = useState([]) // for storing the users data
    // ? const [err, setErr] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const url = '/api/users';

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setUsers(res.data);
            setIsLoading(false);
        })
        .catch(resErr => console.error(resErr))
    }, [])

    return (
        <div className="container">
            {
                isLoading ? 
                <PageLoader/> :
                users.map((user, index) => (
                    <React.Fragment key={index}>
                        <UserCard 
                        userId={user._id} 
                        name={user.name} 
                        profileImg={user.profileImg} 
                        email={user.email} 
                        bio={user.bio} />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Users
