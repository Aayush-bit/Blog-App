import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Alert } from 'react-bootstrap'

import { LoggedInContext } from '../../App'
import LoginForm from "../../components/Login/LoginForm"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState({})
    const [err, setErr] = useState()
    const [setLoggedIn] = useContext(LoggedInContext)
    const history = useHistory();

    useEffect(() => {
        // whether data is empty or not
        if(JSON.stringify(data)!==JSON.stringify({})) {

            const url = '/auth/login';

            axios.post(url, data)
            .then(res => {
                setLoggedIn(res.data.loggedIn)
                
                // redirect to dashboard page 
                history.push('/dashboard');
            })
            .catch((resErr) => {
                setErr(resErr.response.status);

                setPassword('');

                // if the account with entered email address doesn't exist in the database
                if(resErr.response.status === 404) {
                    setEmail('');
                }
            })
        }
    }, [data])
    
    return (
        <div className="container">
            <h1 className="display-4 mb-3">Login</h1>
            <LoginForm 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            setData={setData} />
            <hr/>
            <p className="text-muted">
                Create a new account! <Link to='/signup'>Sign Up</Link>
            </p>

            {/* Alert the user about the error (if exists) */}
            {
                (err === 404) ? 
                <>
                    <Alert variant="danger">
                        Account with the entered email address doesn't exist!
                    </Alert>
                </> : null
            }
            {
                (err === 401) ? 
                <>
                    <Alert variant="danger">
                        Incorrect password entered! Please try again...
                    </Alert>
                </> : null
            }
        </div>
    )
}

export default Login
