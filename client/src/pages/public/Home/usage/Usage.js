import React from 'react'
import "./Usage.css"
import {Container, Row, Col} from "react-bootstrap"

const Usage = () => {
    return (
        <div className="usage container-fluid">
            <h1 className="display-4 text-center text-capitalize">how to use</h1>

            <Container>
                <Row>
                    <Col sm={4}>
                        <span className="usage__tip">
                            {/* sign up or login */}
                            <img className="usage__image" src="https://cdn3.iconfinder.com/data/icons/basic-ui-5/48/sign_in-512.png" alt="" />
                            <span className="mt-1">Sign Up or Login</span>
                        </span>
                    </Col>
                    <Col sm={4}>
                        <span className="usage__tip">
                            {/* create a post */}
                            <img className="usage__image" src="https://tse1.mm.bing.net/th?id=OIP.85MGm1o_yQKLFT10AbKmOwHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                            <span className="mt-1">Create a Blog Post</span>
                        </span>
                    </Col>
                    <Col sm={4}>
                        <span className="usage__tip">
                            {/* manage posts from dashboard page */}
                            <img className="usage__image" src="https://tse4.mm.bing.net/th?id=OIP.fY3Gj76BzVyvIxvrdmum3wHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                            <span className="mt-1">Manage Posts from Dashboard</span>
                        </span>
                    </Col>
                </Row>

                <Row>  
                    <Col sm={6}>
                        <span className="usage__tip">
                            {/* edit your profile info on profile page */}
                            <img className="usage__image" src="https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                            <span className="mt-1">Edit Your Profile</span>
                        </span>
                    </Col>
                    <Col sm={6}>
                        <span className="usage__tip">
                            {/* read blog posts of other users on posts page */}
                            <img className="usage__image" src="https://tse4.mm.bing.net/th?id=OIP.28aITjCfg6sbCQ8zn5ArywHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                            <span className="mt-1">View Posts by Others</span>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Usage
