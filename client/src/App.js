import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const tokenContext = createContext()

function App() {
  const [token, setToken] = useState([]);
  const [loggedIn, setLoggedIn] = useState();
  // const [tokenPresent, setTokenPresent] = useState();
  useEffect(() => {
    try {
      console.log(`cookies present: ${document.cookie.length}`)
    } catch {
      console.error('some error')
    }

    setLoggedIn( (token.length !== 0) ? true : false )
    return
  }, [token])

  const updateTokenVal = (value) => {
    setToken(value);
  }

  console.log(`Login Status: ${loggedIn}`)

  return (
    <div className="App">
      <tokenContext.Provider value={updateTokenVal} >
        <Router>
          <StickyTopNavbar />
          <Routes />
        </Router>
        {console.log(`token: ${token}`)}
      </tokenContext.Provider>
    </div>
  );
}

export default App;
