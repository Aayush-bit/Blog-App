import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col, Container} from "react-bootstrap";
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
                <>
                    <Container>
                        <Row>
                        {
                            users.map((user, index) => (
                                <Col sm={4} key={index}>
                                    <UserCard 
                                    userId={user._id} 
                                    name={user.name} 
                                    profileImg={user.profileImg} 
                                    email={user.email} 
                                    bio={user.bio} />
                                </Col>
                            ))
                        }
                        </Row>
                    </Container>
                </>
            }
        </div>
    )
}

export default Users
