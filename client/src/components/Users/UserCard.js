import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ userImag, name, email }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userImag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {email}
                        {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                    </Card.Text>
                    <Button variant="success">Follow</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
