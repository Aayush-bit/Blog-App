import React from 'react'
import "./CreatePostIcon.css"
import { useHistory } from 'react-router-dom'

const CreatePostIcon = () => {
    const history = useHistory();
    return (
        <div 
        className="create-post-icon"
        onClick={() => history.push(`/post/create`)}>
            <div className="add-symbol">+</div>
        </div>
    )
}

export default CreatePostIcon
