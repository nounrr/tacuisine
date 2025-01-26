import React, { useState, useEffect } from "react";
import '../../assest/css/modal.css'; 
import Slider from '@mui/material/Slider';
import Categorie from "../categories/categories";

const Modal = ({ onCancel, onConfirm, initialCategory, initialDuration }) => {
  const Categories = [
    { title: "Breakfast", emoji: "🥞" },
    { title: "Lunch", emoji: "🍔" },
    { title: "Dinner", emoji: "🍛" },
    { title: "Drinks", emoji: "🍹" },
    { title: "Desserts", emoji: "🍰" },
  ];

  // States for selected category and duration
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  // Set initial values when modal is opened
  useEffect(() => {
    setSelectedCategory(initialCategory || null);
    setSelectedDuration(initialDuration || null);
  }, [initialCategory, initialDuration]);

  // Reset filters
  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedDuration(null);
  };

  // Confirm selection
  const handleConfirm = () => {
    onConfirm({ category: selectedCategory, duration: selectedDuration });
  };

  return (
    <div>
      <div className={`drawer open`}>
        <div className="drwer_content">
          <h2 className="title green">Add a Filter</h2>
          <div className="reset-container">
            <h2 className="title blue">Category</h2>
            <button 
              className="reset-btn" 
              onClick={handleReset} 
              aria-label="Reset Filters"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" 
                      stroke="#000" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Categorie 
            categories={Categories} 
            onSelect={setSelectedCategory} // Update selected category
          />
          <h2 className="title blue">Durée <span>En minute</span></h2>
          <Slider 
            className="customSlider" 
            sx={{ color: "#FFD700", marginTop: "10px" }}
            min={0}
            max={60}
            step={5}
            value={selectedDuration || 0} // Handle null duration
            valueLabelDisplay="auto"
            onChange={(e, value) => setSelectedDuration(value)}
          />
          <div className="button-container">
            <button className="cancel-btn" onClick={onCancel}>Annuler</button>
            <button className="confirm-btn" onClick={handleConfirm}>Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
