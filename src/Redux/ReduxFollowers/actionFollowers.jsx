
export const fetchfollowers = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:5000/suivis');
        const data = await response.json();
        
        dispatch({
          type: 'FETCH_SUIVIS_SUCCESS',
          payload: data, 
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_SUIVIS_ERROR',
          payload: error.message, // Error message
        });
      }
    };
  };
  
export const followUser = (utilisateurId, chefId) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/suivis', {
        method: 'POST',
        body: JSON.stringify({ utilisateur_id: utilisateurId, chef_id: chefId }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: 'FOLLOW_USER', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FOLLOW_ERROR', payload: error.message });
    }
  };
  export const unfollowUser = (utilisateurId, chefId) => async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/suivis/${utilisateurId}/${chefId}`, { method: 'DELETE' });
      dispatch({ type: 'UNFOLLOW_USER', payload: { utilisateur_id: utilisateurId, chef_id: chefId } });
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };
  