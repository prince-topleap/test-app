import React from 'react';
import './Navbar.scss';

import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="Navbar">
      <Link to="/">
        <h6>Home</h6>
      </Link>
      <Link to="/about">
        <h6>About</h6>
      </Link>
    </div>
  )
};

export default Navbar;
