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
            
            <div className="home__aboutSection">
                {/* about section */}
                <AboutSection />
            </div>

            <div className="home__usageSection">
                {/* how to use the application */}
                <Usage />
            </div>
        </div>
    )
}

export default Home
