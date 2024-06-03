import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/Navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
