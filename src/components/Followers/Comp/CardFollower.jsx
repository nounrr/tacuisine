import React from 'react'
import style from './CardFollower.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function CardFollower() {
  return (
    <div className={style.Card_follower}>
        <div className={style.imgFollower}>
            <img src={ process.env.PUBLIC_URL + './img/bg1.jpg'}/>
        </div>
        <div className={style.infoFOllower}>
            <h1 style={{marginBottom:"7px"}} className='title blue'>Aya Ziad</h1>
            <span >20 Recettes</span><br />
            <button style={{marginTop:"8px"}} className='btn_primary'>Follow</button>
        </div>
        <button className={style.arrow_button}>
             <FontAwesomeIcon className={style.arrow_icon} icon={faArrowRight} />
        </button>
    </div>
  )
}

export default CardFollower