import React from 'react'
import style from '../../assest/css/ProfilePages/Banner.module.css';

function Banner() {
  return (
    <div className={style.banner_profile}>
      <div className={style.profile_info}>
        <img src="/img/bg1.jpg"/>
        <h1 className={style.name}>Khadija Kasri</h1>
        <div className={style.num}>
           <div>
            <h3>97</h3>
            <h4>Recttes</h4>
           </div>
           <div>
            <h3>669</h3>
            <h4>Followers</h4>
           </div>
           <div>
            <h3>567</h3>
            <h4>Following</h4>
           </div>
        </div>
      </div>
      <div className={style.overlay} ></div>

    </div>
  )
}

export default Banner