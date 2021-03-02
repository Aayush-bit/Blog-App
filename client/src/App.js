import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [token, setToken] = useState();
  if(!token) {console.log('no token yet')}
  return (
    <div className="App">
      <Router>
        <StickyTopNavbar token={token} />
        <Routes controlToken={[token, setToken]} />
        {JSON.stringify(token)}
      </Router>
    </div>
  );
}

export default App;
