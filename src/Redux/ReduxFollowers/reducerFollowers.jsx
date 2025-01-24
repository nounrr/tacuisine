const initialState = {
    follows: [],
    error: null,
  };
  
  const suivisReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SUIVIS_SUCCESS':
        return {
          ...state,
          follows: action.payload,
          error: null,
        };
      case 'FETCH_SUIVIS_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'FOLLOW_USER':
        return {
          ...state,
          follows: [...state.follows, action.payload],
        };
      case 'UNFOLLOW_USER':
        return {
          ...state,
          follows: state.follows.filter(
            (follow) => follow.chefId !== action.payload.chefId
          ),
        };
      default:
        return state;
    }
  };
  
  export default suivisReducer;
  