import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {Alert} from 'react-bootstrap'
import SignUpForm from "../../components/SignUp/SignUpForm"
import { LoggedInContext } from '../../App'

function SignUp() {
    const [data, setData] = useState({});
    const [submitStatus, setSubmitStatus] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [err, setErr] = useState();
    const history = useHistory();
    
    useEffect(() => {        
        if(submitStatus) {
            const url = '/auth/signup'
            axios.post(url, data)
            .then(res => {
                setLoggedIn(res.data.loggedIn);
                // redirect to dashboard page 
                history.push('/dashboard');
            })
            .catch((resErr) => {
                setErr(resErr.response.status);
                setSubmitStatus(false);
            });
        }
    }, [submitStatus])

    return (
        <div className="container">
            <h1 className="display-4 mb-3">Sign Up</h1>
            <SignUpForm 
            submitStatus={submitStatus}
            setSubmitStatus={setSubmitStatus}
            setData={setData} />
            <hr/>

            <p className="text-muted">
                Already have an account? <Link to='/login'>Login</Link>
            </p>

            {
                err === 400 ? 
                <Alert 
                className="mt-3"
                variant="info">
                    Account already exists. Please proceed to <Link to='/login'>Login</Link> page.
                </Alert>
                : null
            }

        </div>
    )
}

export default SignUp
