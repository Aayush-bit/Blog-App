import React from 'react'
import { Link } from 'react-router-dom'
import "./HeroSection.css"
import heroSvgImage from './heroSvgImage.svg';

function HeroSection() {
    return (
        <div className="heroSection container">
            <div className="heroSection__headings">
                <h1 className="display-4 text-capitalize heroSection__heading">
                    be blogging in a few clicks
                </h1>
                <h4 className="heroSection__subHeading mb-4 text-capitalize">
                    blog your ideas to share with the world
                </h4>
                <div className="heroSection__buttons">
                    <Link to={'/signup'} className="btn btn-success mr-4">Sign Up Today</Link>
                    {/* <Link to={'/login'} className="btn btn-outline-info">Login</Link> */}
                </div>
            </div>
            <img src={heroSvgImage} alt="hero section image" className="heroSection__image" />
        </div>
    )
}

export default HeroSection
