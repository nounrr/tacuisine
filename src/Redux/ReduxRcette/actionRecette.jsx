export const fetchRecettes = () => async (dispatch) => {
    try {
      dispatch({ type: 'RECIPES_LOADING' });
      const response = await fetch('http://localhost:5000/recettes');
      const data = await response.json();
      dispatch({ type: 'FETCH_RECIPES_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_RECIPES_ERROR', payload: error.message });
    }
  };
  export const createRecette = (recipeData) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/recettes', {
        method: 'POST',
        body: JSON.stringify(recipeData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: 'CREATE_RECIPE', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_RECIPES_ERROR', payload: error.message });
    }
  };
  export const updateRecette = (recipeData) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/recettes/${recipeData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipeData),
      });
      const data = await response.json();
      dispatch({ type: 'UPDATE_RECIPE', payload: data });
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
  export const deleteRecette = (recipeId) => async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/recettes/${recipeId}`, { method: 'DELETE' });
      dispatch({ type: 'DELETE_RECIPE', payload: recipeId });
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };
    
  