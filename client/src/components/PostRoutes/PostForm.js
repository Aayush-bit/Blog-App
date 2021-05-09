import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PostForm = ({ setPostData, editPostData, setSubmitStatus }) => {
    const [title, setTitle] = useState((editPostData !== undefined) ? editPostData.post.title : "");
    const [image, setImage] = useState((editPostData !== undefined) ? editPostData.post.image.img : "");
    const [placeholder, setPlaceholder] = useState((editPostData !== undefined) ? editPostData.post.image.placeholder : "");
    const [content, setContent] = useState((editPostData !== undefined) ? editPostData.post.content : "");

    const tellCurrentDate = () => {
        let current = new Date();

        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;

        return(dateTime);
    }
    
    const handleFormSubmit = (e) => {
        if(editPostData === undefined) {            
            setPostData({
                "post": {
                    "image": {"img": image, "placeholder": placeholder},
                    "title": title,
                    "content": content
                },
                "postedOn": tellCurrentDate()
            });
        }

        else if(editPostData !== undefined) {
            setPostData({
                "post": {
                    "image": {"img": image, "placeholder": placeholder},
                    "title": title,
                    "content": content
                },
                "editedOn": tellCurrentDate()
            });
        }
        
        setSubmitStatus(true);
        e.preventDefault();
    }
    
    return (
        <div className="mb-4">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="My cool post title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image(URL)</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter URL to the image (if any)" 
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Placeholder for Image</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Here you can explain what the image is all about" 
                    onChange={(e) => setPlaceholder(e.target.value)}
                    value={placeholder}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={8} 
                    placeholder="Your content goes here... All The Best!!" 
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PostForm