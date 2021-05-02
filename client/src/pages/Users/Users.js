// !! reconsider api values returned as response from server

import React, {useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import axios from 'axios'

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
            <h1 className='display-4'>Users</h1>
            {
                isLoading ? 
                <>
                    <div className="loader">
                        <Loader
                            type="TailSpin"
                            color="#343a40"
                            height={70}
                            width={70}
                        />
                    </div>
                </> :
                users.map((user, index) => (
                    <React.Fragment key={index}>
                        <hr/>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Users
