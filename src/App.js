import './App.css';
import React from 'react';
import Home from './Page/Home';
import SearchPage from './Page/SearchPage';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      
      
      <Routes>
        <Route path ="/search" element={<SearchPage hideButtons/>}/>
          
        <Route path ="/" element={<Home/>}/>
        
      </Routes>

      
      
      </Router>
    </div>

    // Home Page: search bar
    // Search Page: Result Page
  );
}

export default App;
