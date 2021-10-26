import React from 'react'
import AboutSection from './aboutSection/AboutSection'
import HeroSection from './heroSection/HeroSection'
import "./Home.css"
import Usage from './usage/Usage'

function Home() {
    return (
        <div className="home mb-4">
            {/* hero section */}
            <HeroSection />
            <hr />
            {/* about section */}
            <AboutSection />
            <hr />
            {/* how to use the application */}
            <Usage />
            {/* purpose */}
        </div>
    )
}

export default Home
