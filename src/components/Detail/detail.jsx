
import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import style from "../../assest/css/detail.module.css"; 
import im1 from "./exemp/im1.jpg";
import im2 from "./exemp/im2.jpg";
import im3 from "./exemp/im3.jpg";
import im4 from "./exemp/im4.jpg";

import { FaHeart } from "react-icons/fa6";


function Detail() {
  // Données de la recette
  const title = "Moroccan Sushi";
  const type = "Food";
  const duration = "60 mins";
  const owner = "Chef Hassan";
  const likeNbr = "234";
  const ownerImage = "./img/bg1.jpg"; // Exemple d'image de profil
  const description =
    "A delicious fusion of traditional Moroccan flavors wrapped in sushi rolls. Perfect for an exotic dinner!";
  const galleryImages = [im1, im2, im3, im4];
  const ingreds = [
    { id: 1, label: "4 Sheets of Nori (Seaweed)" },
    { id: 2, label: "2 Cups of Cooked Sushi Rice" },
    { id: 3, label: "100g of Smoked Salmon" },
    { id: 4, label: "1 Avocado, sliced" },
    { id: 5, label: "1 Cucumber, julienned" },
    { id: 6, label: "Soy Sauce for dipping" },
    { id: 7, label: "Pickled Ginger for serving" },
    { id: 8, label: "Wasabi (optional)" },
  ];
  const steps = [
    { id: 1, label: "Prepare the sushi rice and let it cool slightly." },
    { id: 2, label: "Place a sheet of nori on the bamboo mat, shiny side down." },
    { id: 3, label: "Spread a thin layer of rice evenly over the nori." },
    { id: 4, label: "Add smoked salmon, avocado, and cucumber on top of the rice." },
    { id: 5, label: "Carefully roll the nori using the bamboo mat, pressing gently." },
    { id: 6, label: "Cut the roll into bite-sized pieces and serve with soy sauce, ginger, and wasabi." },
  ];

  // Gestion du carrousel
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <>
    <div className="content">
      {/* Détails de la recette */}
      <div>
        <h2  className={`blue ${style.title}`}>{title}</h2>
        <span className={style.type}>
          {type} • {duration}
        </span>
        <div className={style.auth_like}>
        <div className={style.card_author}>
          <img src={ownerImage} alt={owner} className={style.author_image} />
          <h2  className={style.author_name}>{owner}</h2>
        </div>
        <div className={style.like_section}>
          <div className={style.cercle_like}>
          < FaHeart className={style.hearth} />

          </div>
          <h2 className=" blue">{likeNbr} Likes</h2>
          </div>
          </div>
        <hr />
      </div>

      {/* Galerie */}
      <div className={style.swiper}>
        <h2 className="title blue">Gallery</h2>
        <motion.div ref={carouselRef} className={style.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={style.innercarousel}
          >
            {galleryImages.map((image, index) => (
              <motion.div className={style.item} key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <hr />
      </div>

      {/* Description */}
      <div className={style.description}>
        <h2 className="title blue">Description</h2>
        <p>{description}</p>
      </div>
      <hr />

      {/* Ingrédients */}
      <div className={style.ingredients_section}>
        <h2 className="title blue">Ingredients</h2>
        {ingreds.map((ingred) => (
          <div className={style.container} key={ingred.id}>
            <div className={style.cercle}>
              <FaCheck className={style.check} />
            </div>
            <h4>{ingred.label}</h4>
          </div>
        ))}
      </div>
      <hr />

      {/* Étapes */}
      <div className={style.steps_container}>
        <h2 className="title blue">Steps</h2>
        {steps.map((step, index) => (
          <div key={index} className={style.step_item}>
            <div className={style.step_index}>
              <div className={style.step_number}>{index + 1}</div>
              <p className={style.step_description}>{step.label}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Detail;