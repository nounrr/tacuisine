import React from 'react';
import style from '../../assest/css/PhoneNav/PhoneNav.module.css';
import { GrHomeRounded } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { PiChefHatLight } from "react-icons/pi";





const PhoneNav = () => {
    

    return (<>
       <nav className={style.navBar}>
          <div className={`${style.left} ${style.navDiv}`}>
          
          <div className={style.icons}>
            <GrHomeRounded className={`${style.icon} ${style.icon_active}`} />
            <FaMagnifyingGlass className={style.icon} />
            </div>
          </div>

          <div className={`${style.right} ${style.navDiv}`}>
            <div className={style.icons}>
            <FaRegBell className={style.icon} />
            <FaRegUser className={style.icon} />
            </div>

          </div>
          

       </nav>
       <div className={style.cercle}>
       <PiChefHatLight className={style.icon} />

       </div>
       </>
    );
};

export default PhoneNav;
