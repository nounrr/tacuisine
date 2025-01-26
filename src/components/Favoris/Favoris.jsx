import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addFavoris, removeFavoris } from "../../Redux/favorisSlice";
import style from "../../assest/css/detail.module.css"; // Create styles as needed

const Favoris = ({ recetteId }) => {
  const dispatch = useDispatch();
  const favoris = useSelector((state) => state.favoris);

  const isFavoris = favoris.includes(recetteId);

  const handleToggleFavoris = () => {
    if (isFavoris) {
      dispatch(removeFavoris(recetteId));
    } else {
      dispatch(addFavoris(recetteId));
    }
  };

  return (
    <div className={style.fav} onClick={handleToggleFavoris}>
      {isFavoris ? (
        <FaStar style={{color:"#6B8E23"}} className={style.favIcon} />
      ) : (
        <FaRegStar style={{color:"#6B8E23"}} className={style.favIcon} />
      )}
    </div>
  );
};

export default Favoris;
