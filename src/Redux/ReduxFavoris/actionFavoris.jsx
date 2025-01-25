// Action creator to fetch favoris
export const fetchFavoris = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:5000/favoris');
        const data = await response.json();
        
        // Dispatch success action
        dispatch({
          type: 'FETCH_FAVORIS_SUCCESS',
          payload: data, // data from the API response
        });
      } catch (error) {
        // Dispatch error action
        dispatch({
          type: 'FETCH_FAVORIS_ERROR',
          payload: error.message, // Error message
        });
      }
    };
  };
  
  
export const addFavori = (utilisateurId, recetteId) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/favoris', {
        method: 'POST',
        body: JSON.stringify({ utilisateur_id: utilisateurId, recette_id: recetteId }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: 'ADD_FAVORITE', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAVORIS_ERROR', payload: error.message });
    }
  };
  export const removeFavori = (utilisateurId, recetteId) => async (dispatch) => {
    try {
      await fetch(`/http://localhost:5000/favoris/${utilisateurId}/${recetteId}`, { method: 'DELETE' });
      dispatch({ type: 'REMOVE_FAVORITE', payload: { utilisateur_id: utilisateurId, recette_id: recetteId } });
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };
  
  