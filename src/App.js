
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Languages from './pages/Languages';
import Footer from './components/Footer';
import Services from './pages/Services';
import Blog from './pages/Blog';
import EPayment from './pages/EPayment';
import Landing from './pages/Landing';

// import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/languages" element={<Languages/>} />
          <Route path='/epayments' element={<EPayment/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Routes>
        <Footer/>
        </div>
    </Router>
    
  );
};

export default App;