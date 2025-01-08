import React from 'react';
import './header.css'; 

function Header() {
  return (
    <header className="header">  
      <div className="header-top">
        <div className="profile">
            <img src="/img/logo.svg" className='logo'/>
        </div>
        <div className="notification">
          <span className="bell-icon">🔔</span>
          <span className="notification-dot"></span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search...." />
      </div>
      
    </header>
  );
}

export default Header;
