//reupere utilisateur
export const fetchUtilisateurs = () => async (dispatch) => {
    try {
      dispatch({ type: 'USERS_LOADING' });
      const response = await fetch('http://localhost:5000/utilisateurs');
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
  };
  export const createUtilisateur = (userData) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/utilisateurs', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: 'CREATE_USER', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
  };
  export const updateUtilisateur = (userData) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/utilisateurs/${userData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      dispatch({ type: 'UPDATE_USER', payload: data });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  export const deleteUtilisateur = (userId) => async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/utilisateurs/${userId}`, { method: 'DELETE' });
      dispatch({ type: 'DELETE_USER', payload: userId });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  