import React, { useState, createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const tokenContext = createContext()

function App() {
  const [token, setToken] = useState([]);
  if(token.length === 0) { console.log('no token yet ' + token.length) }
  return (
    <div className="App">
      <tokenContext.Provider value={[token, setToken]} >
        <Router>
          <StickyTopNavbar token={token} />
          <Routes controlToken={{token, setToken}} />
        </Router>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
