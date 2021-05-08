import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <h1 className="display-4">Private Home page</h1>
            <Link to="/post/create">Create a post</Link><br/>
            <Link to="/myposts">My Posts</Link><br/>
        </div>
    )
}

export default Home
