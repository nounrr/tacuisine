import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../../assest/css/modal.css'; 
import Categorie from "../Acceuil/categories/categories";

const Modal = () => {
    const Categories = [
        { title: "Breakfast", emoji: "🥞", active: true },
        { title: "Lunch", emoji: "🍔", active: false },
        { title: "Dinner", emoji: "🍛", active: false },
        { title: "Drinks", emoji: "🍹", active: false },
        { title: "Desserts", emoji: "🍰", active: false },
    ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Button to toggle the drawer */}
      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={toggleDrawer}
      />
      
      {/* Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <h2 className="filter-title">Add a Filter</h2>
        <div className="filter-container">
          <div className="filter">
            <div className="emoji">🍔</div>
            <div>Recettes</div>
          </div>
          <div className="filter">
            <div className="emoji">👨🏻‍🍳</div>
            <div>Chef</div>
          </div>
        </div>
        <h2 className="filter-title">Category</h2>
        <Categorie categories={Categories} />
        <div className="button-container">
          <button className="cancel-btn" onClick={toggleDrawer}>Annuler</button>
          <button className="confirm-btn">Confirmer</button>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </div>
  );
};

export default Modal;
