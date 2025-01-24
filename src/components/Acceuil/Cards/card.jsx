import {React} from "react";
import { Link } from "react-router";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Recips = ({ recipes }) => {

  return (
    <>
    <div className="List">
      {recipes.map((recette, index) => (
        <div className="card" key={index}>
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
            <Link to="/detail">
            <button className="arrow-button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button></Link>
           
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Recips;
