import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import UploadSucces from './UploadSucces';

import { Link } from 'react-router';
import style from '../../../assest/css/AjouterRecettes/AjouterRecettes.module.css';


const AjouterRecette = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const pages = [
    

    { id: 1, content: <Page1 /> },
    { id: 2, content: <Page2 /> },
    { id: 3, content: <Page3 /> },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.container}>
      {finish ?<UploadSucces /> :<></>}
      <div className={style.header}>
        <Link className={style.cancelButton}>
          Cancel
        </Link>
        
        <span className={`blue ${style.pageIndicator}`}>
          {currentPage + 1}/{pages.length}
        </span>
      </div>

      <div className={style.slide}>
        <>{pages[currentPage].content}</>
      </div>

      <div className={style.footer}>
        {currentPage > 0 && (
          <button className={style.greyButton} onClick={handleBack}>
            Retour
          </button>
        )}
        {currentPage < pages.length - 1 ? (
          <button style={{    marginBottom: "1rem"}} className={style.yellowButton} onClick={handleNext}>
            Continuer
          </button>
        ) : (
          <button className={style.yellowButton} onClick={() => setFinish(true)}>
            Ajouter
          </button>
        )}
      </div>
    </div>
  );
};

export default AjouterRecette;
