import React from "react";
import Recips from "./Recips"; // Import du composant Recips
import "./cards.css";

const CardsList = ({ recipes }) => {
  return (
    <div className="List">
      {recipes.map((recette, index) => (
        <Recips key={index} recette={recette} />
      ))}
    </div>
  );
};

export default CardsList;
