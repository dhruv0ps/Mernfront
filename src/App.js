
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resource from './Resource';
import Contact from './Contact';
import Company from './Company';
import Navigator from './Navigator';



function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/company' element={<Company />} />
          <Route path='/resource' element={<Resource />} />
         
          
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
