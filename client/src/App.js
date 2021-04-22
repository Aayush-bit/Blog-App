import React, { useEffect, createContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import { useCookies } from 'react-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

export const LoggedInContext = createContext()

function App() {
  // to store login status in the cookie
  const [cookies, setCookie, deleteCookie] = useCookies(['loggedInCookie'])
  
  // "loggedIn" state will be initialized according to the value in the cookie "loggedInCookie" (if present)
  const [loggedIn, setLoggedIn] = useState(cookies.loggedInCookie ? cookies.loggedInCookie : false)

  
  useEffect(() => {
    // to set and delete cookie on the basis of "loggedIn" state
    if (loggedIn) {
      setCookie('loggedInCookie', true, { path: '/' })
    } else {
      if (cookies.loggedInCookie) {
        deleteCookie('loggedInCookie', { path: '/' })
      }
    }
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
