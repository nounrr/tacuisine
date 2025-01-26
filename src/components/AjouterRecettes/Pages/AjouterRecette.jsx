import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import UploadSucces from './UploadSucces';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRecette } from '../../../Redux/recettesSlice';
import style from '../../../assest/css/AjouterRecettes/AjouterRecettes.module.css';

const AjouterRecette = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [currentPage, setCurrentPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const [newRecette, setNewRecette] = useState({
    titre: '',
    description: '',
    ingredients: [],
    instructions: [],
    temps_preparation: 0,
    nom_categorie: '',
    utilisateur: user.username,
    cover: '',
    video_instructions: '',
    images_resultat: [],
  });

  const pages = [
    {
      id: 1,
      content: (
        <Page1
          newRecette={newRecette}
          setNewRecette={setNewRecette}
        />
      ),
    },
    {
      id: 2,
      content: (
        <Page2
          newRecette={newRecette}
          setNewRecette={setNewRecette}
        />
      ),
    },
    {
      id: 3,
      content: (
        <Page3
          newRecette={newRecette}
          setNewRecette={setNewRecette}
        />
      ),
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleAddRecette = () => {
    dispatch(addRecette(newRecette)); // Enregistre la recette dans Redux
    setFinish(true);
    setTimeout(() => navigate('/recettes'), 2000); // Redirection après succès
  };

  return (
    <div className={style.container}>
      {finish ? <UploadSucces /> : <></>}
      <div className={style.header}>
        <Link onClick={() => navigate(-1)} className={style.cancelButton}>
          Cancel
        </Link>
        <h5 className={`blue ${style.pageIndicator}`}>
          {currentPage + 1}/{pages.length}
        </h5>
      </div>
      <div className={style.slide}>{pages[currentPage].content}</div>
      <div className={style.footer}>
        {currentPage > 0 && (
          <button className={style.greyButton} onClick={handleBack}>
            Retour
          </button>
        )}
        {currentPage < pages.length - 1 ? (
          <button
            style={{ marginBottom: '1rem' }}
            className={style.yellowButton}
            onClick={handleNext}
          >
            Continuer
          </button>
        ) : (
          <button className={style.yellowButton} onClick={handleAddRecette}>
            Ajouter
          </button>
        )}
      </div>
    </div>
  );
};

export default AjouterRecette;
