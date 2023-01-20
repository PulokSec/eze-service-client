import React from 'react';
import NavBar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <NavBar/>
      <HeaderMain/>
    </div>
  );
};

export default Header;
