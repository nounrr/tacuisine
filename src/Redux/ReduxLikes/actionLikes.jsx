export const fetchLikes = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:5000/likes');
        const data = await response.json();
        
        // Dispatch success action
        dispatch({
          type: 'FETCH_LIKES_SUCCESS',
          payload: data, // data from the API response
        });
      } catch (error) {
        // Dispatch error action
        dispatch({
          type: 'FETCH_LIKES_ERROR',
          payload: error.message, // Error message
        });
      }
    };
  };
  
export const addLike = (utilisateurId, recetteId) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/likes', {
        method: 'POST',
        body: JSON.stringify({ utilisateur_id: utilisateurId, recette_id: recetteId }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: 'ADD_LIKE', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_LIKES_ERROR', payload: error.message });
    }
  };
  export const removeLike = (utilisateurId, recetteId) => async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/likes/${utilisateurId}/${recetteId}`, { method: 'DELETE' });
      dispatch({ type: 'REMOVE_LIKE', payload: { utilisateur_id: utilisateurId, recette_id: recetteId } });
    } catch (error) {
      console.error('Error removing like:', error);
    }
  };
  
