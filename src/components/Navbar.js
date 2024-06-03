import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label className="logo">HomeStyle</label>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </nav>
      <div className="main"></div>
    </div>
  );
};

export default Navbar;
