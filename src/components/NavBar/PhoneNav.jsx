import React from 'react';
import style from '../../assest/css/PhoneNav/PhoneNav.module.css';
import { GrHomeRounded } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { PiChefHatLight } from "react-icons/pi";





const PhoneNav = () => {
    

<<<<<<< HEAD
    return (<div className={style.menu}>
       <nav className={style.navBar}>
=======
    return (<>
      <nav className={style.navBar}>
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
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
<<<<<<< HEAD
       </div>
=======
       
       </>
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
    );
};

export default PhoneNav;
