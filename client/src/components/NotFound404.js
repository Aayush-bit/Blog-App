import React from 'react'
import {Link} from 'react-router-dom'

function NotFound404() {
    return (
        <>
            <div className="container">
                <h1 className="display-4">
                    Looks like, you are lost
                </h1>
                <p className="text-muted">
                    Go back to <Link to='/'>Home</Link> page
                </p>
            </div>
            
        </>
    )
}

export default NotFound404
