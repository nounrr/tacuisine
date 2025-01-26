import React from 'react';
import style from '../../../assest/css/BienvenuComp.module.css';
import '../../../assest/css/App.css';

function BienvenuComp(props) {
  const bgImg = {
    background: `url('${props.bgLink}')`, 
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={style.screen} style={bgImg}>
      <div className={style.block}>
        <img src='./img/logo.svg' alt="logo" />
        <h1>{props.title}</h1>
        <p>{props.paragraphe}</p>
        {props.comp}
      </div>
    </div>
  );
}

export default BienvenuComp;
