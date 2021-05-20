import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from "../../components/SignUp/SignUpForm"
import { LoggedInContext } from '../../App'

function SignUp() {
    const [data, setData] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
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
            .catch(() => window.location.reload());
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
        </div>
    )
}

export default SignUp
