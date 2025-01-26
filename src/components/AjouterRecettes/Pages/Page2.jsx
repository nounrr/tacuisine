import React from "react";
import Slider from "@mui/material/Slider";
import style from "../../../assest/css/AjouterRecettes/AjouterRecettes.module.css";

const marks = [
  { value: 5, label: "<10" },
  { value: 50, label: "50" },
  { value: 95, label: ">95" }
];

const categories = [
  { value: "breakfast", label: "Breakfast 🥞" },
  { value: "lunch", label: "Lunch 🍔" },
  { value: "dinner", label: "Dinner 🍛" },
  { value: "drinks", label: "Drinks 🍹" },
  { value: "desserts", label: "Desserts 🍰" },
];

function valuetext(value) {
  return `${value} min`;
}

const Page2 = ({ newRecette, setNewRecette }) => {
  const handleChange = (field, value) => {
    setNewRecette({ ...newRecette, [field]: value });
  };

  return (
    <div className="content">
      <div className={style.slide2}>
        <div>
          <h1 className="title blue">Nom de recette</h1>
          <input
            type="text"
            className={style.addInput}
            placeholder="Entrer le nom de recette"
            value={newRecette.titre}
            onChange={(e) => handleChange("titre", e.target.value)}
          />
        </div>
        <div>
          <h1 className="title blue">Description</h1>
          <textarea
            rows={5}
            className={style.textarea}
            placeholder="Entrer la description"
            value={newRecette.description}
            onChange={(e) => handleChange("description", e.target.value)}
          ></textarea>
        </div>
        <div>
          <h1 className="title blue">Durée (en minutes)</h1>
          <Slider
            className="customSlider"
            sx={{ color: "#FFD700", marginTop: "10px" }}
            min={0}
            max={100}
            step={5}
            marks={marks}
            defaultValue={30}
            value={newRecette.temps_preparation}
            onChange={(e, value) => handleChange("temps_preparation", value)}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
          />
        </div>
        <div>
          <h1 className="title blue">Catégorie</h1>
          <select
            className={style.addInput}
            value={newRecette.nom_categorie}
            onChange={(e) => handleChange("nom_categorie", e.target.value)}
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page2;
