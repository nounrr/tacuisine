import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Recips = ({ recipes }) => { // Destructure the recipes array from props
    return (
      <>
        {recipes.map((recette, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={recette.imageUrl} alt={recette.title} />
              <div className="star-icon">
                <FontAwesomeIcon icon={faStar} />
              </div>
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
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };
  
export default Recips;
