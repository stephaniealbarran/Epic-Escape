import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Main from './components/Main.js' ;
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


function App() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
