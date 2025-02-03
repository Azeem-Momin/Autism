import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './landing_page/About';
import FAQs from './landing_page/FAQs';
import AutismCheck from './landing_page/AutismCheck';
import Blog from './landing_page/Blog';
import Home from './landing_page/Home';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/autism-check" element={<AutismCheck />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
