import React from 'react'
import './header.css'; 
import { IoMdNotificationsOutline } from "react-icons/io";

export default function TopBar() {
  return (
    <div className="header-top">
        <div className="profile">
            {/* <img src="/img/logo.svg" className='logo'/> */}
            <h1 className=' green'>Kozintk</h1>
        </div>
        <div className="notification">
          <IoMdNotificationsOutline   className="bell-icon"/>
        </div>
      </div>
  )
}
