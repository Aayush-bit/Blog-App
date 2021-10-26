import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

function UserCard({ userId, name, profileImg, email, bio }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followBtnVariant, setFollowBtnVariant] = useState("success");
    const [followBtnMessage, setFollowBtnMessage] = useState("Follow");
    const history = useHistory();
    
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

    const redirectToUserProfile = () => {
        history.push(`/user/profile/${userId}`)
    }

    return (
        <div>
            <Card className="mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profileImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Email: {email}</Card.Text>
                    {bio ? <Card.Text className="text-muted">{bioBrief}</Card.Text> : null}
                    {/* <Button variant={followBtnVariant} onClick={handleFollowStatusChange}>{followBtnMessage}</Button>
                    <Button variant="info" className="ml-3" onClick={redirectToUserProfile}>Show Profile</Button> */}
                    <Button variant="info" onClick={redirectToUserProfile}>Show Profile</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
