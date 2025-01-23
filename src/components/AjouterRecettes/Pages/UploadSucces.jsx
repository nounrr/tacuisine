import React from 'react'
import style from '../../../assest/css/AjouterRecettes/AjouterRecettes.module.css';
import { Link } from 'react-router';

function UploadSucces() {
  return (
    <div className={style.slide4}>
     <div className={style.box_success}>
        <img src="./img/emoji_succes.jpg" alt="" />
        <h1 className='title blue'>Upload Success</h1>
        <p>Votre recette a été ajoutée,
        vous pouvez la voir sur votre profil.</p>
        <Link className="btn_primary">Retour à l'accueil</Link>
     </div>
    </div>
  )
}

export default UploadSucces