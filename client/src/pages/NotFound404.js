import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { LoggedInContext } from '../App'

function NotFound404() {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext) 

    const loggedInMessage = 
    <>
        <p>
            Get back to Dashboard Page <Link to="/dashboard">Dashboard</Link>. 
        </p>
    </>;
    
    const unAuthMessage = 
    <>
        <p>Get back to Home Page <Link to="/">Home</Link>. </p>
    </>;
    return (
        <>
            <div className="container">
                <h1 className="display-4">
                    Looks like, you are lost
                </h1>
                { loggedIn ? loggedInMessage : unAuthMessage }
            </div>
            
        </>
    )
}

export default NotFound404
