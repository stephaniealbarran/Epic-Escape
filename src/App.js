import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Faq from './components/Faq';
import './styles/Card.css';
import './styles/App.css';
import './styles/Navbar.css';
import './styles/Carousel.scss';
import './styles/CardSlider.css';
import './styles/Faq.css';
import BlogCard from './components/BlogCard';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <Index />
      <BlogCard/>
      <Faq/>
      <Footer />
    </div>
  );
}

export default App;
