import React from 'react';
import TopBar from '../Header/TopBar';
import CardsList from '../Cards/CardsList';
import { useSelector } from 'react-redux';

function FavorisList() {
  const recettes = useSelector((state) => state.recettes.recettes);
  const favoris = useSelector((state) => state.favoris);

  const favorisRecettes = recettes.filter((recette) => favoris.includes(recette.id));

  return (
    <div className="content">
      <TopBar  />
      <h1 style={{marginTop:"10px"}} className="title blue">Mes Favoris</h1>
      <CardsList recipes={favorisRecettes} />
    </div>
  );
}

export default FavorisList;
