import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Favoris from "../Favoris/Favoris";

const Recips = ({ recette }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={recette.cover} alt={recette.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{recette.titre}</h3>
        <h3 className="card-type">{recette.nom_categorie}</h3>
        <div className="card-author">
          <span className="author-name">{recette.utilisateur}</span>
        </div>
      </div>
      <div className="card-actions">
        <Favoris  recetteId={recette.id} />
        <button className="arrow-button">
          <Link className="arrow_icon" to={`/details/${recette.id}`}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Recips;
