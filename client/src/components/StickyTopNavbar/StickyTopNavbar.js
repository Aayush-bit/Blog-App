import React, { useContext } from 'react'
import UnauthNavbar from './UnauthNavbar'
import LoggedInNavbar from './LoggedInNavbar'
import { LoggedInContext } from '../../App'
import './StickyTopNavbar.css'

function StickyTopNavbar() {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext)

    return (
        <div className="StickyTopNavbar mb-4">
            {loggedIn ? <LoggedInNavbar setLoggedIn={ setLoggedIn } /> : <UnauthNavbar /> }
        </div>
    )
}

export default StickyTopNavbar
