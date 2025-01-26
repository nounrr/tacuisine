import React from 'react';
import './header.css'; 
import TopBar from './TopBar';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <header className="header">  
      <TopBar />
      <div onClick={()=>navigate("/search")}>
      <SearchInput  />
      </div>
    </header>
  );
}

export default Header;
