import React, { useEffect, createContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import { useCookies } from 'react-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const LoggedInContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(false)  
  
  // ? complete the part of storing login status in the cookie
  const [loggedInCookie, setLoggedInCookie] = useCookies(null)

  useEffect(() => {
    console.log(`Log in status: ${loggedIn}`)
  }, [loggedIn])

  return (
    <div className="App">
      <LoggedInContext.Provider value={[loggedIn, setLoggedIn]} >
        <Router>
          <StickyTopNavbar />
          <Routes />
        </Router>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
