import React from 'react';
import style from '../../assest/css/PhoneNav/PhoneNav.module.css';
import { GrHomeRounded } from "react-icons/gr";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { PiChefHatLight } from "react-icons/pi";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";


const PhoneNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Example routes to handle with each icon:
  const homeRoute = "/accueil";
  const searchRoute = "/search";
  const mesfavoris = "/mesfavoris";
  const userRoute = "/profile";
  const ajouterRecetteRoute = "/ajouterRecette";

  // A helper function to check if a given route is the current path
  const isActive = (route) => location.pathname === route;

  return (
    <div className={style.menu}>
      <nav className={style.navBar}>

        <div className={`${style.left} ${style.navDiv}`}>
          <div className={style.icons}>
            <GrHomeRounded
              className={`${style.icon} ${isActive(homeRoute) ? style.icon_active : ""}`}
              onClick={() => navigate(homeRoute)}
            />

            <FaMagnifyingGlass
              className={`${style.icon} ${isActive(searchRoute) ? style.icon_active : ""}`}
              onClick={() => navigate(searchRoute)}
            />
          </div>
        </div>

        <div className={`${style.right} ${style.navDiv}`}>
          <div className={style.icons}>
            <FaRegStar
              className={`${style.icon} ${isActive(mesfavoris) ? style.icon_active : ""}`}
              onClick={() => navigate(mesfavoris)}
            />

            <FaRegUser
              className={`${style.icon} ${isActive(userRoute) ? style.icon_active : ""}`}
              onClick={() => navigate(userRoute)}
            />
          </div>
        </div>

      </nav>

      <div className={style.cercle}>
        <PiChefHatLight
          className={style.icon}
          onClick={() => navigate(ajouterRecetteRoute)}
        />
      </div>
    </div>
  );
};

export default PhoneNav;
