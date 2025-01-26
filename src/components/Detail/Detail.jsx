import React, { useState, useEffect, useRef } from "react";
import { FaCheck, FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import style from "../../assest/css/detail.module.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRecette } from "../../Redux/recettesSlice";
import Favoris from "../Favoris/Favoris";

function Detail() {
  const { id } = useParams();
  const recette = useSelector((state) =>
    state.recettes.recettes.find((r) => r.id === parseInt(id, 10))
  );
  const authUser = useSelector((state) => state.auth.user); 
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecette(id));
    navigate(-1);
  };

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  if (!recette) {
    return <div>Recette non trouvée</div>;
  }

  const {
    titre,
    nom_categorie,
    temps_preparation,
    utilisateur,
    description,
    instructions,
    ingredients,
    cover,
    images_resultat,
    video_instructions,
  } = recette;

  const likeNbr = 234;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={style.cover}>
        <img src={`${cover}`} alt={titre} />
        <div className={style.prev}>
          <GrFormPreviousLink onClick={goBack} />
        </div>
        <Favoris recetteId={recette.id} />
      </div>
      <div className="content">
        <div>
          <h2 className={`blue ${style.title}`}>{titre}</h2>
          <span className={style.type}>
            {nom_categorie} • {temps_preparation} min
          </span>
          <div className={style.auth_like}>
            <div className={style.card_author}>
              <h2 className={style.author_name}>{utilisateur}</h2>
            </div>
            <div className={style.like_section}>
              <div className={style.cercle_like}>
                <FaHeart className={style.hearth} />
              </div>
              <h2 className="blue">{likeNbr} Likes</h2>
            </div>
          </div>
          <hr />
        </div>
        {images_resultat && images_resultat.length > 1 && (
          <div className={style.swiper}>
            <h2 className="title blue">Gallery</h2>
            <motion.div ref={carouselRef} className={style.carousel}>
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className={style.innercarousel}
              >
                {images_resultat.map((image, index) => (
                  <motion.div className={style.item} key={index}>
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <hr />
          </div>
        )}
        <div className={style.description}>
          <h2 className="title blue">Description</h2>
          <p>{description}</p>
        </div>
        <hr />
        <div className={style.ingredients_section}>
          <h2 className="title blue">Ingrédients</h2>
          {ingredients.map((ingred, index) => (
            <div className={style.container} key={index}>
              <div className={style.cercle}>
                <FaCheck className={style.check} />
              </div>
              <h4>
                {ingred.nom} - {ingred.quantite}
              </h4>
            </div>
          ))}
        </div>
        <hr />
        <div className={style.steps_container}>
          <h2 className="title blue">Instructions</h2>
          {instructions.map((step, index) => (
            <div key={step.id} className={style.step_item}>
              <div className={style.step_index}>
                <div className={style.step_number}>
                  <h3>{index + 1}</h3>
                </div>
                <p className={style.step_description}>{step.texte}</p>
              </div>
            </div>
          ))}
        </div>
        {video_instructions && (
          <>
            <hr />
            <div>
              <h2 className="title blue">Vidéo de préparation</h2>
              <video width="100%" height="auto" controls>
                <source src={video_instructions} type="video/mp4" />
              </video>
            </div>
          </>
        )}

        {authUser?.username === utilisateur && (
          <button
            onClick={() => handleDelete(recette.id)}
            className="btn_primary"
            style={{
              backgroundColor: "red",
              color: "white",
              width: "90%",
              border: "none",
              textAlign: "center",
              margin: "20px auto",
              justifyContent: "center",
            }}
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
}

export default Detail;
