import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ name, email }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <Button variant="success">Follow</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
