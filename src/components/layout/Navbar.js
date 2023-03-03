import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <i className={icon}></i> {title}
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'bi bi-github nav-icon',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
