import React, { useState } from "react";
import style from "../../../assest/css/AjouterRecettes/AjouterRecettes.module.css";

const Page3 = ({ newRecette, setNewRecette }) => {
  const [ingredients, setIngredients] = useState(newRecette.ingredients || []);
  const [steps, setSteps] = useState(newRecette.instructions.map((step) => step.texte) || []);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
    setNewRecette({ ...newRecette, ingredients: updatedIngredients });
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
    setNewRecette({
      ...newRecette,
      instructions: updatedSteps.map((texte, id) => ({ id: id + 1, texte })),
    });
  };

  const addIngredient = () => {
    const updatedIngredients = [...ingredients, { nom: "", quantite: "" }];
    setIngredients(updatedIngredients);
    setNewRecette({ ...newRecette, ingredients: updatedIngredients });
  };

  const addStep = () => {
    const updatedSteps = [...steps, ""];
    setSteps(updatedSteps);
    setNewRecette({
      ...newRecette,
      instructions: updatedSteps.map((texte, id) => ({ id: id + 1, texte })),
    });
  };

  return (
    <div className="content">
      <div className={style.slide2}>
        <div>
          <h1 className="title blue">Ingrédients</h1>
          {ingredients.map((ingredient, index) => (
            <div key={index} className={style.ingredientInputGroup}>
              <input
                type="text"
                className={style.addInput}
                placeholder="Nom de l'ingrédient"
                value={ingredient.nom}
                onChange={(e) =>
                  handleIngredientChange(index, "nom", e.target.value)
                }
              />
              <input
                type="text"
                className={style.qtInput}
                placeholder="Quantité"
                value={ingredient.quantite}
                onChange={(e) =>
                  handleIngredientChange(index, "quantite", e.target.value)
                }
              />
            </div>
          ))}
          <button className={style.add_btn} onClick={addIngredient}>
            + Ajouter un ingrédient
          </button>
        </div>
        <div>
          <h1 className="title blue">Étapes</h1>
          {steps.map((step, index) => (
            <div key={index} className={style.stepInputGroup}>
              <span className={style.stepNum}>{index + 1}</span>
              <textarea
                rows={5}
                className={style.textarea}
                placeholder="Description de l'étape"
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
              />
            </div>
          ))}
          <button className={style.add_btn} onClick={addStep}>
            + Ajouter une étape
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
