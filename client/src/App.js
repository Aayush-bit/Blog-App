import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StickyTopNavbar from './components/StickyTopNavbar/StickyTopNavbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <StickyTopNavbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
