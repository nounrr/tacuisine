import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./categorie.css";

export default function Categorie({ categories, onSelect }) {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default selected category
  const controls = useAnimation();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      startInfiniteScroll();
    }
  }, [isDragging]);

  const startInfiniteScroll = () => {
    controls.start({
      x: -width,
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity, // Infinite scroll
        repeatType: "loop",
      },
    });
  };

  const handleCategoryClick = (categorie) => {
    setSelectedCategory(categorie); // Update selected category
    onSelect(categorie); // Notify parent about the selection
  };

  return (
    <motion.div
      ref={carouselRef}
      className="carousel"
      onMouseEnter={() => setIsDragging(true)} // Stop animation when dragging starts
      onMouseLeave={() => setIsDragging(false)} // Resume animation on mouse leave
    >
      <motion.div
        className="innercarousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        animate={!isDragging ? controls : undefined} // Apply animation when not dragging
      >
        {categories.map((categorie, index) => (
          <motion.div
            key={index}
            className={`item ${selectedCategory.title === categorie.title ? "active" : ""}`} // Highlight active category
            onClick={() => handleCategoryClick(categorie)} // Handle category click
          >
            <div className="category">
              <div className="emoji">{categorie.emoji}</div>
              <div>{categorie.title}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
