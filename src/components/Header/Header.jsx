import React from 'react';
import './header.css'; 
import TopBar from './TopBar';

function Header() {
  return (
    <header className="header">  
      <TopBar />
      <div className="search-bar">
        <input type="text" placeholder="Search...." />
      </div>
      
    </header>
  );
}

export default Header;
