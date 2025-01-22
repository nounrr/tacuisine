import React from 'react';
import './header.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header className="header">  
      <div className="header-top">
        <div className="profile">
            <img src="/img/logo.svg" className='logo'/>
        </div>
        <div className="notification">
          <FontAwesomeIcon icon={faBell}  className="bell-icon"/>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search...." />
      </div>
      
    </header>
  );
}

export default Header;
