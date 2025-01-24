const initialState = {
    recipes: [],
    error: null, // To store error messages
  };
  
  const recettesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_SUCCESS':
        return {
          ...state,
          recipes: action.payload,
          error: null, // Clear any previous error
        };
      case 'FETCH_RECIPES_ERROR':
        return {
          ...state,
          error: action.payload, // Store the error message
        };
      case 'CREATE_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.payload],
        };
      case 'DELETE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default recettesReducer;
  