import React from 'react'

const ShowPost = ({ fullPostData }) => {
    return (
        <div>
            <p>author: {fullPostData.author}</p>
            <p>image: {fullPostData.postData.post.image.img}</p>
            <p>placeholder: {fullPostData.postData.post.image.placeholder}</p>
            <p>title: {fullPostData.postData.post.title}</p>
            <p>content: {fullPostData.postData.post.content}</p>
            <p>likes: {fullPostData.postData.likes}</p>
            <p>postedOn: {JSON.stringify(fullPostData.postData.postedOn)}</p>
            <p>editedOn: {fullPostData.postData.editedOn}</p>
            <p>id: {fullPostData.postData._id}</p>
        </div>
    )
}

export default ShowPost
