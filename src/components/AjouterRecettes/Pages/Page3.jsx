import React, { useState } from 'react';
import style from '../../../assest/css/AjouterRecettes/AjouterRecettes.module.css';
const Page3 = () => {
  // State to store ingredients and steps
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
  const [steps, setSteps] = useState(['']);

  // Function to handle ingredient change
  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    if (event.target.name === 'ingredient') {
      values[index].name = event.target.value;
    } else {
      values[index].quantity = event.target.value;
    }
    setIngredients(values);
  };

  // Function to handle step change
  const handleStepChange = (index, event) => {
    const values = [...steps];
    values[index] = event.target.value;
    setSteps(values);
  };

  // Function to add a new ingredient input
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  // Function to add a new step input
  const addStep = () => {
    setSteps([...steps, '']);
  };

  return (
    <div className='content'>
      <div className={style.slide2}>
        <div>
          <h1 className='title blue'>Ingredient</h1>
          {ingredients.map((ingredient, index) => (
            <div key={index} className={style.ingredientInputGroup}>
              <input
                name={`ingredient-${index + 1}`}
                type='text'
                className={style.addInput}
                placeholder='Entrer le nom de recette'
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, e)}
              />
              <input
                type='text'
                className={style.qtInput}
                name={`quantite-${index + 1}`}
                placeholder='Quantité'
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, e)}
              />
            </div>
          ))}
          <button className={style.add_btn} onClick={addIngredient}>+ Ingredient</button>
        </div>

        <div>
          <h1 className='title blue'>Les étapes</h1>
          {steps.map((step, index) => (
            <div key={index} className={style.stepInputGroup}>
              <span className={style.stepNum} >{index + 1}</span>
              <textarea
                name={`step-${index + 1}`}
                rows={5}
                className={style.textarea}
                placeholder='Entrer la description'
                value={step}
                onChange={(e) => handleStepChange(index, e)}
              />
            </div>
          ))}
          <button  className={style.add_btn} onClick={addStep}>+ Step</button>
        </div>
      </div>
    </div>
    

  );
};

export default Page3;
