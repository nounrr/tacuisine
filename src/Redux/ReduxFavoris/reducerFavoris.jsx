const initialState = {
    favorites: [],
    error: null, // To store error messages
  };
  
  const favorisReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FAVORIS_SUCCESS':
        return {
          ...state,
          favorites: action.payload,
          error: null,
        };
      case 'FETCH_FAVORIS_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(
            (favorite) => favorite.recetteId !== action.payload.recetteId
          ),
        };
      default:
        return state;
    }
  };
  
  export default favorisReducer;
  