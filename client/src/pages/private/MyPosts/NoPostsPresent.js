import React from 'react'
import { Link } from 'react-router-dom'

const NoPostsPresent = () => {
    return (
        <div>
            <p>No Posts Present!!</p>
            <Link to="/post/create">Create a post</Link>

        </div>
    )
}

export default NoPostsPresent
