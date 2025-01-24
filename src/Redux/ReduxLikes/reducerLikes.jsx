const initialState = {
    likes: [],
    error: null, // To store error messages
  };
  
  const likesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LIKES_SUCCESS':
        return {
          ...state,
          likes: action.payload,
          error: null,
        };
      case 'FETCH_LIKES_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'ADD_LIKE':
        return {
          ...state,
          likes: [...state.likes, action.payload],
        };
      case 'REMOVE_LIKE':
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.recetteId !== action.payload.recetteId
          ),
        };
      default:
        return state;
    }
  };
  
  export default likesReducer;
  