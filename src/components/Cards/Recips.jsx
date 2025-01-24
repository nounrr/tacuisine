import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Recips = ({ recette }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={recette.imageUrl} alt={recette.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{recette.title}</h3>
        <h3 className="card-type">{recette.type}</h3>
        <div className="card-author">
          <img
            className="author-image"
            src={recette.authorImage}
            alt={recette.owner}
          />
          
          <span className="author-name">{recette.owner}</span>
        </div>
      </div>
      <div className="card-actions">
        <div className="heart-icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <button className="arrow-button">
          <Link className="arrow_icon" to={`details/${recette.id}` } ><FontAwesomeIcon icon={faArrowRight} /></Link>
          
        </button>
      </div>
    </div>
  );
};

export default Recips;
