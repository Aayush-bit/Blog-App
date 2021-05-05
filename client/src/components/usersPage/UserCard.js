import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ name, profileImg, email, bio }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followBtnVariant, setFollowBtnVariant] = useState("success");
    const [followBtnMessage, setFollowBtnMessage] = useState("Follow");

    // some brief of users bio
    const bioBrief = (bio.length >= 35) ? bio.substring(0,35) + "..." : bio;

    const handleFollowStatusChange = () => {
        if(isFollowing === false) {
            setIsFollowing(true);
            setFollowBtnVariant("danger");
            setFollowBtnMessage("Unfollow");
        }
        else if(isFollowing === true) {
            setIsFollowing(false);
            setFollowBtnVariant("success");
            setFollowBtnMessage("Follow");
        }
    }

    return (
        <div>
            <Card className="mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profileImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Email: {email}</Card.Text>
                    {bio ? <Card.Text className="text-muted">{bioBrief}</Card.Text> : null}
                    <Button variant={followBtnVariant} onClick={handleFollowStatusChange}>{followBtnMessage}</Button>
                    <Button variant="info" className="ml-3">Profile</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
