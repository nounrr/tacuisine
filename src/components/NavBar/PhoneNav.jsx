import React, { useState } from "react";
import "./Navigation.css"; // Import the stylesheet

const PhoneNav = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", translateValue: "0rem" },
    { name: "Profile", icon: "person-outline", translateValue: "4rem" },
    { name: "Message", icon: "chatbubble-outline", translateValue: "8rem" },
    { name: "Photos", icon: "camera-outline", translateValue: "12rem" },
    { name: "Settings", icon: "settings-outline", translateValue: "16rem" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="nav-container">
      <ul className="nav-list">
        {/* Sliding circle indicator */}
        <span
          className="nav-indicator"
          style={{ transform: `translateX(${Menus[active].translateValue})` }}
        >
          {/* The two “bumps” on each side */}
          <span className="indicator-shadow-left"></span>
          <span className="indicator-shadow-right"></span>
        </span>

        {/* Menu items */}
        {Menus.map((menu, i) => (
          <li key={i} className="nav-item">
            <a className="nav-link" onClick={() => setActive(i)}>
              <span className={`nav-icon ${i === active ? "nav-icon-active" : ""}`}>
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span className={`nav-text ${i === active ? "nav-text-active" : ""}`}>
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneNav;
