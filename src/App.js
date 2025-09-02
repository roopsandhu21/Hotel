import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import BookingNavbar from './BookingNav';
import AuthPage from './Login';
import Booknow from './BookNow';
import Hotel from './Hotel';
import Resort from './Resort';
import Palace from './Palace';


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
         
        <Route path="/" element={<><Home /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/book-now" element={<BookingNavbar/>} />
        <Route path="/auth" element={<AuthPage />} /> {/* new route */}
        <Route path="/booknow"element={<Booknow/>}/>
        <Route path="/hotel" element ={<><Hotel /></>} />
        <Route path="/resort" element ={<><Resort /></>} />
        <Route path="/palace" element ={<><Palace /></>} />
      

      </Routes>

          
           
     
    </BrowserRouter>
  );
}

export default App;
