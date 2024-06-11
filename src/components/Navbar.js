import React, { useState } from 'react';

import '../styles/Navbar.css';


export default function Navbar() {
    // State to manage if the navbar is collapsed or not
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Function to toggle navbar collapse
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="Navbar" id="mainNav">
              <a className="navbar-brand js-scroll" href="#page-top">Epic Escape</a>
              <button className="navbar-toggler collapsed" type="button" 
                      onClick={handleNavCollapse} 
                      aria-controls="navbarDefault" 
                      aria-expanded={!isNavCollapsed} 
                      aria-label="Toggle navigation">

                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              <menu className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''} justify-content-end`} id="navbarDefault">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link js-scroll" href="#destinations">Destinations</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll" href="#Blog">Blog</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll" href="#faq">FAQ</a>
                      </li>                                    
                  </ul>
              </menu>
        </nav>
    );
  };
